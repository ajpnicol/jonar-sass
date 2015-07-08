<?php
	
$name = $_POST['name']; // required
$company = $_POST['company']; // required
$email = $_POST['email']; // required

	
$to = 'user@jonar.com';
$subject = 'Login Request';
$message = " Here are the details:\n \nName: $name \n ".
          "Email: $email\n Company: $company \n ";
$headers = "From: user@jonar.com\n";
$headers .= "Reply-To: $email"; 
 

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "<span class=\"alert alert-success\" >Thank you, your request has been setnt.</span>"; // success message
}else{
// echo "Oops! There was an error sending your request, please email your login request to us directly at user@jonar.com. Sorry for the inconvenience";
}

?>