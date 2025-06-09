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
    $username = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    $query = "SELECT user_name, user_email FROM users_db WHERE user_name = ? OR user_email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    $response = [
        "usernameExists" => false,
        "emailExists" => false,
    ];

    while ($row = $result->fetch_assoc()) {
        if ($row['user_name'] === $username) $response["usernameExists"] = true;
        if ($row['user_email'] === $email) $response["emailExists"] = true;
    }

    if ($response["usernameExists"] || $response["emailExists"]) {
        echo json_encode($response);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $insertQuery = "INSERT INTO users_db (user_name, user_email, user_password) VALUES (?, ?, ?)";
    $insertStmt = $conn->prepare($insertQuery);
    $insertStmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($insertStmt->execute()) {
        echo json_encode(["success" => true]);
    }
    $conn->close();
?>