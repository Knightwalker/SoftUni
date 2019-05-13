<?php

$arr = explode(" ", readline());
$assocArr = [];

for ($i = 0; $i < count($arr); $i++) {
  $text = strtolower($arr[$i]);

  if (!key_exists($text, $assocArr)) {
    $assocArr[$text] = 1;
  } else {
    $assocArr[$text]++;
  }

}

foreach ($assocArr as $key => $value) {

  if ($value % 2 != 0) {
    echo $key . " ";
  }

}

?>