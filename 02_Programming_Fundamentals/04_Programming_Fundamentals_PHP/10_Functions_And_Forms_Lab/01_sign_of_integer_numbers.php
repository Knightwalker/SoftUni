<?php

$n = readline();
$msg = sign_of_integer($n);
echo $msg;

function sign_of_integer($n) {
  $msg = "";

  if ($n > 0) {
    $msg = "The number " . $n . " is positive.";
  } else if ($n < 0) {
    $msg = "The number " . $n . " is negative.";
  } else if ($n == 0) {
    $msg = "The number " . $n . " is zero.";
  }

  return $msg;
}

?>