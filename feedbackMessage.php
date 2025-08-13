<?php
if(!empty($_POST['name']) AND !empty($_POST['phone'])) {
	$name = $_POST['name'];
	$mail = $_POST['mail'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	$messageAll = "Имя: " . $name . "\nЭлектронная почта: " . $mail . "\nНомер телефона: " . $phone . "\nСообщение: " . $message;
	$messageAllSMS = "Запрос обр. вязи\n"  . $name . "\n" . $phone;
	mail('nikitos1998-2012.ru@mail.ru', 'Обратная связь', $messageAll);
	mail('A138D5DE-BEAB-EAC0-4809-49E759369E56@sms.ru', '79039481754', $messageAllSMS);
	setcookie("Block", 1, time() + 5 * 60);
	header("Location: index.html");
} else {
    echo '<script>alert("Здравствуйте...");</script>';
    echo '<script>alert("Досвидания...");</script>';
    header("Refresh:1; url=index.html");
}
?>
