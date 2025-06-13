<?php
    include './connection.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $data = json_decode(file_get_contents("php://input"), true);
    $action = $data['action'] ?? '';
    $userEmail = $data['loggedUser'] ?? '';
    $getFolderName = $data['folderName'] ?? '';

    $stmt = $conn->prepare("SELECT user_id FROM users_db WHERE user_email = ?");
    $stmt->bind_param("s", $userEmail);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    $userId = $user['user_id'];

    if($action === 'insert'){
        $stmt = $conn->prepare("INSERT INTO user_folders_db (user_id, folder_name) VALUES (?, ?)");
        $stmt->bind_param("is", $userId, $getFolderName);
        $stmt->execute();
    }

    $stmt = $conn->prepare("SELECT folder_name FROM user_folders_db WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();

    $userData = [];

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $userData[] = $row;
        }
    }

    echo json_encode($userData);
    
    $conn->close();
?>