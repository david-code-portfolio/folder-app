<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include 'connection.php';

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $response = [];

    if(isset($_FILES['file']) && isset($_POST['folder']) && isset($_POST['loggedUser'])){
        $file = $_FILES['file'];
        $folder = $_POST['folder'];
        $user = $_POST['loggedUser'];
        $doc_name = $_POST['name'];

        $stmt = $conn->prepare("SELECT user_id FROM users_db WHERE user_name = ?");
        $stmt->bind_param("i", $user);
        $stmt->execute();
        $result = $stmt->get_result();

        if($row = $result->fetch_assoc()){
            $user_id = $row['user_id'];

            $targetDir = "uploads/";
            $targetPath = $targetDir . basename($file["name"]);
        
            if(move_uploaded_file($file["tmp_name"], $targetPath)){
                $stmt = $conn->prepare("INSERT INTO user_data_db (user_id, doc_name, folder, doc_path) VALUES (?, ?, ?, ?)");
                $stmt->bind_param("isss", $user_id, $doc_name, $folder, $targetPath);
                $stmt->execute();

                $response['file moved'] = true;
            }
            else{
                $response['file moved'] = false;
            }

            $response['user'] = $user_id;
        }

        $response['user'] = $result;
    }
    echo json_encode($response);
    $conn->close();
?>