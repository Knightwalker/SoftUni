<?php

$arr = explode(", ", readline());
$assocArr = [];
$resArr = [];

for ($i = 0; $i < count($arr); $i++) {
  $element = $arr[$i] . "";

  if (!array_key_exists($element, $assocArr)) {
    $assocArr[$element] = 1;
  } else {
    $assocArr[$element] += 1;
  }

}

foreach ($assocArr as $key => $value) {
  if ($value <= 1) {
    echo $key . " ";
  }
}

?>