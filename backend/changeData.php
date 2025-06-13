<?php
    include './connection.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $newFolder = json_decode(file_get_contents("php://input"), true);
    $getFolderName = $newFolder['folderName'] ?? '';

    $insertQuery = "INSERT INTO user_folders_db (folder_name) VALUES (?)";
    $insertStmt = $conn->prepare($insertQuery);
    $insertStmt->bind_param("sss", $getFolderName);
    $insertStmt->execute();
?>