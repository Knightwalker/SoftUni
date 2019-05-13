<?php

$n = readline();
echo printing_triangle($n);

function printing_triangle($n) {
  $msg = "";

  for ($a = 1; $a <= $n; $a++) {
    for ($b = 1; $b <= $a; $b++) {
    
      $msg .= $b . " ";

    }
    $msg .= PHP_EOL;
  }

  for ($a = $n - 1; $a >= 1; $a--) {
    for ($b = 1; $b <= $a; $b++) {
    
      $msg .= $b . " ";

    }
    $msg .= PHP_EOL;
  }

  return $msg;
}

?>