<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Oops! Please check to make sure you provided a valid email address";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone_number = $_POST['number'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'beta@jonar.com'; // put your email
$email_subject = "Channel partner:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Message \n $message";
$headers = "From: jonar@jonar.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>