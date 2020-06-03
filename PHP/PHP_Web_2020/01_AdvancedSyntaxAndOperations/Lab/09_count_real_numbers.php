<?php

$numbersArr = explode(" ", readline());
$assocArr = [];
for ($i = 0; $i < count($numbersArr); $i++) {
  $assocArr[$numbersArr[$i]]++;
}

arsort($assocArr);
ksort($assocArr);

foreach ($assocArr as $key => $value) {
  echo $key . " -> " . $value . PHP_EOL;
}