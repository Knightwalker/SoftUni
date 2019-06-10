<?php

$arr = explode(", ", readline());
$assocArr = [];
$resArr = [];

for ($i = 0; $i < count($arr); $i+=2) {
  $element = $arr[$i] . "";

  if (!array_key_exists($element, $assocArr)) {
    $assocArr[$element] = $arr[$i + 1];
  } else {
    $assocArr[$element] += $arr[$i + 1];
  }

}

foreach ($assocArr as $key => $value) {
  echo $key . " => " . $value . PHP_EOL;
}

?>