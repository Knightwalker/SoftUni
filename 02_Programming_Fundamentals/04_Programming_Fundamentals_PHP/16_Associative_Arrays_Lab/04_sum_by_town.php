<?php

$arr = explode(", ", readline());
$res = [];

for ($i = 0; $i < count($arr); $i+=2) {
  $town = $arr[$i];
  $value = intval($arr[$i + 1]);

  if (!key_exists($town, $res)) {
    $res[$town] = 0;
    $res[$town] += $value;
  } else {
    $res[$town] += $value;
  }
  
}

foreach ($res as $key => $value) {
  echo $key . " => " . $value . PHP_EOL;
}

?>