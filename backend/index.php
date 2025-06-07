<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    
    $conn = new mysqli("localhost", "root", "", "folder database");

    $sql = 'SELECT * FROM users_db';
    $result = $conn->query($sql);

    $users = [];
    
    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            $users[] = $row;
        }
    }

    echo json_encode($users);
    $conn->close();
?>