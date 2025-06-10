<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    include 'connection.php';

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    $register = $data['register'];

    $response = [
        "loggedIn" => false,
        "message" => ''
    ];

    $query = "SELECT user_name, user_email, user_password FROM users_db WHERE user_name = ? OR user_email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($register === 'true'){
        if($result->num_rows > 0){
            $response["loggedIn"] = false;
            $response["message"] = "Email or username already exists";
        }
        else{
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $insertQuery = "INSERT INTO users_db (user_name, user_email, user_password) VALUES (?, ?, ?)";
            $insertStmt = $conn->prepare($insertQuery);
            $insertStmt->bind_param("sss", $username, $email, $hashedPassword);
            $insertStmt->execute();

            $response["loggedIn"] = true;
            $response["message"] = "Account successfuly created";
        }
        echo json_encode($response);
    }
    else{
        if($result->num_rows === 0){
            $response["loggedIn"] = false;
            $response["message"] = "Email doesn't exist";
        }
        else{
            $user = $result->fetch_assoc();
            $hashedPassword = $user['user_password'];

            if (password_verify($password, $hashedPassword)) {
                $response["loggedIn"] = true;
                $response["message"] = "Successfully logged in";
            }
            else{
                $response["loggedIn"] = false;
                $response["message"] = "Wrong password";
            }
        }  
        echo json_encode($response);
    }
    $conn->close();
?>