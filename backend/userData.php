<?php
    include './connection.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $data = json_decode(file_get_contents("php://input"), true);
    $action = $data['action'] ?? '';
    $userEmail = $data['loggedUser'] ?? '';

    /* ------------Get-Logged-User------------ */

    $stmt = $conn->prepare("SELECT user_id FROM users_db WHERE user_email = ?");
    $stmt->bind_param("s", $userEmail);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    $userId = $user['user_id'];

    /* ------------Get-User-Folders------------ */

    $stmt = $conn->prepare("SELECT DISTINCT folder FROM user_data_db WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();

    $userFolders = [];

    while($row = $result->fetch_assoc()){
        if($row['folder'] !== '-'){
            $userFolders[] = $row['folder'];
        }
    }

    /* ------------Get-User-Documents------------ */

    $stmt = $conn->prepare("SELECT doc_name, folder FROM user_data_db WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();

    $userDocs = [];

    while($row = $result->fetch_assoc()){
        if($row['folder'] === '-'){
            $row['folder'] = 'dashboard';
        }
        $userDocs[] = [
            'doc_name' => $row['doc_name'],
            'folder' => $row['folder']
        ];
    }

    $userData = [$userFolders, $userDocs];

    echo json_encode($userData);
    $conn->close();
?>