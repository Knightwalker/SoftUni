<?php

$hours = readline();
$minutes = readline();
$minutes += $hours * 60;
$minutes += 30;

$newHours = floor($minutes / 60);
$newMinutes = $minutes - ($newHours * 60);

if ($newHours == 24) {
  echo "0";
} else {
  echo $newHours;
}
echo ":";
if ($newMinutes < 10) {
  echo "0";
}
echo $newMinutes;

?>