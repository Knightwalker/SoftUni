<?php 

$input = intval(readline());
$msg = "";

if ($input % 10 == 0) {
  $msg = "The number is divisible by 10";
} else if ($input % 7 == 0) {
  $msg = "The number is divisible by 7";
} else if ($input % 6 == 0) {
  $msg = "The number is divisible by 6";
} else if ($input % 3 == 0) {
  $msg = "The number is divisible by 3";
} else if ($input % 2 == 0) {
  $msg = "The number is divisible by 2";
} else {
  $msg = "Not divisible";
}

echo $msg;

?>