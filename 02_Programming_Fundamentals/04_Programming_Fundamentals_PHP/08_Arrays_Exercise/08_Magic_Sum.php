<?php

$arr = explode(" ", readline());
$n = readline();

for($i = 0; $i < count($arr) - 1; $i++) {
  for ($j = $i + 1; $j < count($arr); $j++) {
    $number = intval($arr[$i]) + intval($arr[$j]);

    if ($number == $n) {
      echo $arr[$i] . " " . $arr[$j] . PHP_EOL;
    }

  }
}

?>