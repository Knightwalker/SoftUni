<?php

$n = readline();
$input = "";

$parkingRegistry = [];

for ($i = 0; $i < $n; $i++) {
  $input = explode(" ", readline());
  
  if ($input[0] == "register") {
    $username = $input[1];
    $licensePlateNumber = $input[2];

    if (!key_exists($username, $parkingRegistry)) {
      $parkingRegistry[$username] = $licensePlateNumber;
      echo "$username registered $licensePlateNumber successfully" . PHP_EOL;
    } else {
      echo "ERROR: already registered with plate number " . $parkingRegistry[$username] . PHP_EOL;
    }

  } else if ($input[0] == "unregister") {
    $username = $input[1];

    if (key_exists($username, $parkingRegistry)) {
      unset($parkingRegistry[$username]);
      echo "$username unregistered successfully" . PHP_EOL;
    } else {
      echo "ERROR: user $username not found" . PHP_EOL;
    }
  }

}

foreach ($parkingRegistry as $user => $license) {
  echo $user . " => " . $license . PHP_EOL;
}

?>