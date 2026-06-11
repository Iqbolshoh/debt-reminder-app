<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$amount = $_POST['amount'];

// simple validation
if(!$name || !$phone || !$amount){
  echo "❌ Please fill all fields";
  exit;
}

// fake SMS simulation
$message = "⚠️ Reminder: $name, you owe $amount. Please pay soon.";

// log file (simulating SMS sending)
$file = fopen("log.txt", "a");
fwrite($file, "To: $phone | $message \n");
fclose($file);

echo "✅ Reminder sent successfully to $phone";

?>