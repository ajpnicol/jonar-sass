<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['company'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Oops! Please check to make sure you provided a valid email address";
	return false;
   }
	
$name = $_POST['name']; // required
$company = $_POST['company']; // required
$email_from = $_POST['email']; // required
	
// create email body and send it	
$email_to = 'user@jonar.com'; // put your email
$email_subject = "Login Request";
        $email_message .= "Name: ".clean_string($name)."\n";
		    $email_message .= "Email: ".clean_string($email_from)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
mail($email_to, $email_subject, $email_message, $headers);
return true;
?>

<style type="text/css">
#requestLogin, #requestContainer {
  display:none;
} 
</style>
 
<?php
}
?>