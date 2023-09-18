<?php
// This is a simple example of a server-side script in PHP to send an email.
// Replace the email configurations and recipient with your own.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    
    $name = $data->name;
    $email = $data->email;
    $message = $data->message;

    $to = "tshwaneloals@gmail.com"; // Replace with the recipient's email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else { 
        echo json_encode(["success" => false]);
    }
}
?>
