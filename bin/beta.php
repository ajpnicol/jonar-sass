<?php

// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$q4 = $_POST['q4'];
$q5 = $_POST['q5'];
$q6 = $_POST['q6'];
$q7 = $_POST['q7'];
 
$to = 'beta@jonar.com';
$subject = 'Beta signup';
$message = " Here are the details:\n \nName: $name \n ".
				  "Email: $email\n Contact number: $number\n  Company: $q4 \n Number of users: $q5 \n Industry: $q6 \n Current ERP system: $q7\n ";
$headers = "From: beta@jonar.com\n";
$headers .= "Reply-To: $email";	
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Thank you for applying to our Beta program, we'll be in touch soon"; // success message
}else{
echo "Oops! Please check to make sure you answered the questions and provided a valid email address";
}

?>