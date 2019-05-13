<?php 

$username = readline();
$password = strrev($username);
$counter = 0;
$loginPassword = "";

  while($loginPassword != $password) {
    $loginPassword = readline();

    if ($loginPassword != $password) {
      $counter++;

      if ($counter == 4) { break; }
      echo "Incorrect password. Try again." . PHP_EOL;
    }
  }

  if ($counter >= 4) {
    echo "User " . $username . " blocked!" . PHP_EOL;
  } 
  else {
    echo "User " . $username . " logged in." . PHP_EOL; 
  }

?>