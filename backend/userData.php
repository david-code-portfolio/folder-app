<?php
    include './connection.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $user = json_decode(file_get_contents("php://input"), true);
    $userData = $user['loggedUser'] ?? '';

    $sql = "SELECT folder_name FROM user_folders_db WHERE user_id =
        (SELECT user_id FROM users_db WHERE user_email = ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $userData);
    $stmt->execute();

    $result = $stmt->get_result();

    $userData = array();

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $userData[] = $row;
        }
    }

    echo json_encode($userData);
    $conn->close();
?>