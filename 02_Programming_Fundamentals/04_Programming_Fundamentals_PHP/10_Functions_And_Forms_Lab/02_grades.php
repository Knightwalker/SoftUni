<?php

$n = readline();
$msg = grades($n);
echo $msg;

function grades($n) {
  $msg = "";

  if ($n >= 2.00 && $n <= 2.99) {
    $msg = "Fail";
  } else if ($n >= 3.00 && $n <= 3.49){
    $msg = "Poor";
  } else if ($n >= 3.50 && $n <= 4.49){
    $msg = "Good";
  } else if ($n >= 4.50 && $n <= 5.49){
    $msg = "Very good";
  } else if ($n >= 5.50 && $n <= 6.00){
    $msg = "Excellent";
  }

  return $msg;
  
}

?>