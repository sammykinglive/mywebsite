<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  if (isset($_GET['email'])) {
    // Set the recipient email address
    $to = 'your-email@example.com';
  
    // Set the subject of the email
    $subject = 'Quote Request';
  
    // Compose the email message
    $message = "Hello,\n\nA quote request has been submitted through your website.\n\n";
    $message .= "Email: " . $_GET['email'];
  
    // Set the additional email headers
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
  
    // Send the email
    $sent = mail($to, $subject, $message, $headers);
  
    if ($sent) {
      echo 'Email sent successfully.';
    } else {
      echo 'Failed to send email.';
    }
  } else {
    echo 'Email address not provided.';
  }
}
?>
