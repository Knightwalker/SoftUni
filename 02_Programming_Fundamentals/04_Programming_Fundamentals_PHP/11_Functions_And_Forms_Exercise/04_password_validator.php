<?php

$password = readline();
password_validator($password);

function password_validator($password) {
  $validateCharactersN = false;
  $validateLettersAndDigits = false;
  $validateDigitsN = 0;

  // Password must be between 6 and 10 characters
  if (strlen($password) >= 6 && strlen($password) <= 10) {
    $validateCharactersN = true;
  }

  // Password must consist only of letters and digits
  if (preg_match_all("/^[A-Za-z0-9]+$/", $password)) {
    $validateLettersAndDigits = true;
  }

  // Password must have at least 2 digits
  for ($i = 0; $i < strlen($password); $i++) {
    if ($password[$i] == "0" || $password[$i] == "1" || $password[$i] == "2" || $password[$i] == "3" || $password[$i] == "4" || $password[$i] == "5" || $password[$i] == "6" || $password[$i] == "7" || $password[$i] == "8" || $password[$i] == "9") {
      $validateDigitsN++;
    }  
  }

  if ($validateCharactersN == false) {
    echo "Password must be between 6 and 10 characters" . PHP_EOL;
  }
  if ($validateLettersAndDigits == false) {
    echo "Password must consist only of letters and digits" . PHP_EOL;
  }
  if ($validateDigitsN < 2) {
    echo "Password must have at least 2 digits" . PHP_EOL;
  }
  
  if ($validateCharactersN == true && $validateLettersAndDigits == true && $validateDigitsN >= 2) {
    echo "Password is valid";
  }

  return 0;
   
}

?>