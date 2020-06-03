<?php

$input = readline();

if (strlen($input) < 20) {
    
  for ($i = 0; $i < 20; $i++) {
    if ($i < strlen($input)) {
      echo $input[$i];
    } else {
      echo "*";
    }
  }

} else {

  for ($i = 0; $i < strlen($input); $i++) {
    echo $input[$i];
  }

}

?>