<?php

$experience = $_POST['application-experience'];
$first_name = $_POST['application-first-name'];
$surname = $_POST['application-surname'];
$gender = $_POST['application-gender'];
$address = $_POST['application-address'];
$email_address = $_POST['application-email'];
$phone = $_POST['application-phone'];
$dob = $_POST['application-dob'];
$native_language = $_POST['application-native-language'];
$dialect = $_POST['application-dialect'];
$voice_age = $_POST['application-voice-age'];
$other = $_POST['application-other'];

// Create the email and send the message
$to = 'info@hermes-synchron.de';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website application form.\n\n"."Here are the details:\n\nFirst name: $first_name\n\nSurname: $surname\n\nExperience: $experience\n\nGender: $gender\n\nDate of birth: $dob\n\n--------------------\n\nEmail: $email_address\n\nPhone: $phone\n\nAddress: $address\n\n--------------------\n\nNative language: $native_language\n\nDialect: $dialect\n\nVoice age: $voice_age\n\n--------------------\n\nMessage:\n$other";
$headers = "From: $email_address\n";
$headers .= "Reply-To: info@hermes-synchron.de";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
