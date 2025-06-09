<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];

        $conn = new mysqli("localhost", "root", "", "folder database");
        $stmt = $conn->prepare("INSERT INTO users_db (user_name, user_email, user_password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $password);

        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => "Failed to insert user"]);
        }

        $stmt->close();
        $conn->close();
    } 
    else {
        echo json_encode(["error" => "No data received or invalid JSON"]);
    }
?>