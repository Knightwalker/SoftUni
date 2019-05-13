<?php

$input = explode(", ", readline());
$re = '/^[A-Za-z0-9-_]{3,16}$/m';

foreach ($input as $username) {
  if (preg_match($re, $username) > 0) {
    echo $username . PHP_EOL;
  }
}

?>