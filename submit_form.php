<?php
function sendEmail($to, $subject, $message, $headers) {
  $result = mail($to, $subject, $message, $headers);
  
  if ($result) {
    return true; // Email sent successfully
  } else {
    return false; // Failed to send email
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $fullName = $_POST['fullName'];
  $email = $_POST['email'];
  $companyName = $_POST['companyName'];
  $enquiry = $_POST['enquiry'];

  $to = 'info@efficientgsl.com';
  $subject = 'Quote Request';
  $message = "Full Name: $fullName\n"
    . "Email: $email\n"
    . "Company Name: $companyName\n"
    . "Enquiry: $enquiry";
  $headers = 'From: ' . $email;

  $result = sendEmail($to, $subject, $message, $headers);

  if ($result) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>

