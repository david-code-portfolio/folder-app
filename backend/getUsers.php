<?php
    include 'connection.php';

    $sql = "SELECT user_name, user_email FROM users_db";
    $result = $conn->query($sql);

    $users = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }

    echo json_encode($users);
    $conn->close();
?>