<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['shirtSize'])	||
   empty($_POST['product3'])	||
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$email_address = $_POST['shirtSize'];
$email_address = $_POST['product3'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'clim@traderjoes.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Hawaiian Shirt Order Form :  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have received a new message from your website's contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nSize: $shirtSize\n\nProducts: $product3\n\nMessage:\n$message";
$headers = "From: noreply@your-domain.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>