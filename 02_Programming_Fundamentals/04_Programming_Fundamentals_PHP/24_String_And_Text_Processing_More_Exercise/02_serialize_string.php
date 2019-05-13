<?php

$input = readline();
$serializeInput = [];

for ($i = 0; $i < strlen($input); $i++) {
  $letter = $input[$i];
  $serializeInput[$letter][] = $i . "";
}

foreach ($serializeInput as $key => $value) {
  echo $key . ":";
  echo implode("/", $value) . PHP_EOL;
}

?>