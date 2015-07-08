<?php
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "user@jonar.com";
    $email_subject = "Your email subject line";
     
    $pageID = "";
    
    if (basename($_SERVER['PHP_SELF'], ".php") == 'contact_1'){
        $pageID = "contact";
    } else if(basename($_SERVER['PHP_SELF'], ".php") == 'login'){
        $pageID = "login";
    } else {
        $pageID = "demo";
    }    
     
    function died($error) {
        // your error code can go here
	echo "<div id='contactMessage'>";
        echo $error;
	if($pageID == "contact"){
		echo "</br><a href='contact_1.php'>";
	} else if ($pageID == "login"){
        echo "</br><a href='login.php'>";
    } else {
		echo "</br><a href='contact_2.php'>";
	}
	echo	"back to form</a></div>";
        die();
    }
     
    // validation expected data exists
	if($pageID=="contact"){
		if(!isset($_POST['name']) ||
			!isset($_POST['company']) ||
			!isset($_POST['email']) ||
			!isset($_POST['telephone']) ||
			!isset($_POST['comments'])) {
			died('We are sorry, but there appears to be a problem with the form you submitted.');       
		}
	} else if($pageID=='login'){
        if(!isset($_POST['name']) ||
			!isset($_POST['email']) ) {
			died('We are sorry, but there appears to be a problem with the form you submitted.');       
		}
    } else {
		if(!isset($_POST['name']) ||
			!isset($_POST['company']) ||
			!isset($_POST['email']) ||
			!isset($_POST['telephone']) ||
			!isset($_POST['when']) ||
			!isset($_POST['what'])) {
			died('We are sorry, but there appears to be a problem with the form you submitted.');       
		}
	}	
     
    $name = $_POST['name']; // required
    $company = $_POST['company']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
    $when = $_POST['when'];
    $what = $_POST['what'];
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$company)) {
    $error_message .= 'The company name you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
	if ($pageID == 'contact') {
		$email_message .= "Name: ".clean_string($name)."\n";
		$email_message .= "Company: ".clean_string($company)."\n";
		$email_message .= "Email: ".clean_string($email_from)."\n";
		$email_message .= "Telephone: ".clean_string($telephone)."\n";
		$email_message .= "Comments: ".clean_string($comments)."\n";
	} else if($pageID == 'login'){
		$email_subject = "Login Request";
        $email_message .= "Name: ".clean_string($name)."\n";
		$email_message .= "Email: ".clean_string($email_from)."\n";
    } else {
		$email_message .= "Name: ".clean_string($name)."\n";
		$email_message .= "Company: ".clean_string($company)."\n";
		$email_message .= "Email: ".clean_string($email_from)."\n";
		$email_message .= "Telephone: ".clean_string($telephone)."\n";
		$email_message .= "When would you like ro receive a demonstration: ".clean_string($when)."\n";
		$email_message .= "What are you interested in learning more about: ".clean_string($where)."\n";
	}

    
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
 <div id="contactMessage">
Thank you for contacting Jonar. We will be in touch with you shortly.
</div>
<style type="text/css">
#contactform, #demoform, #requestLogin, #requestContainer {
	display:none;
}	
</style>
 
<?php
}
?>