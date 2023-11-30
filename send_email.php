<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $designation = $_POST["designation"];
    $signature = $_POST["signature"];
    $communicationAddress = $_POST["communicationAddress"];
    $businessAddress = $_POST["businessAddress"];
    $state = $_POST["state"];
    $district = $_POST["district"];

    // Compose email message
    $to = "info@idcindia.net";
    $subject = "New IDC Franchise Member Registration";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nDesignation: $designation\nSignature: $signature\nCommunication Address: $communicationAddress\nBusiness Address: $businessAddress\nState: $state\nDistrict: $district";

    // Additional headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error: Unable to send email.";
    }
} else {
    echo "Invalid request.";
}
?>
