<?php 

$inputChar = readline();
$validateUpperCase = false;

for ($i = 65; $i <= 90; $i++) {
  if (ord($inputChar) == $i) {
    $validateUpperCase = true;
  }
}

if ($validateUpperCase == true) {
  echo "upper-case";
} else {
  echo "lower-case";
}

?>