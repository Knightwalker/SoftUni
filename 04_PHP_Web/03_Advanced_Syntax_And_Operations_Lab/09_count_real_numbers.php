<?php

$arr = array_map('floatval', explode(" ", readline()));
$assocArr = [];

for ($i = 0; $i < count($arr); $i++) {
  $element = $arr[$i] . "";

  if (!array_key_exists($element, $assocArr)) {
    $assocArr[$element] = 1;
  } else {
    $assocArr[$element] += 1;
  }

}

arsort($assocArr);
ksort($assocArr);

foreach ($assocArr as $key => $value) {
  echo $key . " -> " . $value . PHP_EOL;
}

?>