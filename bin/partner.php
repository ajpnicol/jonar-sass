<?php

// Check the checkbox
$updates = intval($_POST['updates']);
if ($_POST['updates'] == '1') {
    $updates = 'Send me updates.';
}


// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$q4 = $_POST['q4'];
$q5 = $_POST['q5'];
$updates = $_POST['updates'];

$to = 'partners@jonar.com';
$subject = 'Partner signup';
$message = " Here are the details:\n \nName: $name \n ".
		   "Email: $email\n Contact number: $number\n Company: $q4 \n Industry: $q5 \n Send updates: $updates\n";
$headers = "From: partners@jonar.com\n";
$headers .= "Reply-To: $email";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Thank you for your application to become a channel partner, we'll be in touch soon"; // success message
}else{
  echo "Oops! Please check to make sure you answered the questions and provided a valid email address";
}

?>
