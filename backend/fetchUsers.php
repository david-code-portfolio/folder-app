<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    include "./connection.php";

    $sql = "SELECT * FROM users_db";
    $result = $conn->query($sql);

    $users = [];

    if($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            $users[] = $row;
        }
    }

    echo json_encode($users);

    $conn->close();
?>