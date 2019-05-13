<?php

$input = intval(readline());

$days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
  ];

if ($input >= 1 && $input <= 7) {
  echo $days[$input - 1];
} else {
  echo "Invalid Day!";
}

?>