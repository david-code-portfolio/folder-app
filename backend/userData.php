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
        $userFolders[] = $row['folder'];
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




    /* if($action === 'insert'){
        $stmt = $conn->prepare("INSERT INTO user_folders_db (user_id, folder_name) VALUES (?, ?)");
        $stmt->bind_param("is", $userId, $getFolderName);
        $stmt->execute();
    }
    if($action === 'delete'){
        $stmt = $conn->prepare("DELETE FROM user_folders_db WHERE user_id = ? AND folder_name = ?");
        $stmt->bind_param("is", $userId, $getFolderName);
        $stmt->execute();
    }
    if($action === 'insert document'){
        $getFolderName = $getDocumentData['folder'];

        $stmt = $conn->prepare("SELECT folder_name, folder_id FROM user_folders_db WHERE user_id = ?");
        $stmt->bind_param("i", $userId);
        $stmt->execute();
        $result = $stmt->get_result();

        $folderMatch = '';

        while($row = $result->fetch_assoc()){
            if($row['folder_name'] === $getFolderName){
                $folderMatch = $row['folder_id'];
                break;
            }
        }

        if($folderMatch !== ''){
            $stmt = $conn->prepare("INSERT INTO user_docs_db (folder_id, doc_name, doc_tag, doc_path) VALUES (?, ?, ?, ?)");
            $stmt->bind_param('isss', $folderMatch, $getDocumentData['name'], $getDocumentData['tag'], $getDocumentData['doc_path']);
            $stmt->execute();
        }
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
    } */
?>