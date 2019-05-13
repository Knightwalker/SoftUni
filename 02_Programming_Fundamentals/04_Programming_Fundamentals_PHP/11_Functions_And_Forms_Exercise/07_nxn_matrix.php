<?php

$n = readline();
echo nxn_matrix($n);

function nxn_matrix($n) {
  $msg = "";
  
  for ($i = 0; $i < $n; $i++) {
    for ($j = 0; $j < $n; $j++) {
      $msg .= $n . " ";
    }
    $msg .= PHP_EOL;
  }

  return $msg;
}

?>