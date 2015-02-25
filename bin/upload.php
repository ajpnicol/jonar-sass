<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['number'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$number = $_POST['number'];
// create email body and send it	
$to = 'jonar@jonar.com'; // put your email
$subject = "Career application:  $name";
$message = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Number \n $number";
$headers = "From: jonar@jonar.com\n";
$headers .= "Reply-To: $email_address";	

mail($to,$email_subject,$email_body,$headers);
return true;	
		
?>
