<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['number']) 		||
   empty($_POST['file'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Oops! Please check to make sure you answered the questions and provided a valid email address";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone_number = $_POST['number'];
$dir_upload = 'file/';
$MAX_FILE_SIZE = 2000000;

$file = $_FILES['file'];

if ($file['size'] <= $MAX_FILE_SIZE && $file['size'] > 0) {
	$new_name = time() . '-' . $file['name'];
	$copied = copy($file['tmp_name'], $dir_upload . $new_name);

	if ($copied) {
		$message = 'Ok!';
	} else {
		$message = 'Error!';
	}
} else {
	$message = 'Max file size 2mb!';
}

echo json_encode(array("message" => $message));
	
// create email body and send it	
$to = 'jonar@jonar.com'; // put your email
$email_subject = "Career application:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Files \n $file";
$headers = "From: jonar@jonar.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
