<?php

$deserializeList = [];

while (true) {
  $serializeInput = explode(":", readline());
  if ($serializeInput[0] == "end") { break; }
  $letter = $serializeInput[0];
  $indexes = explode("/", $serializeInput[1]);

  for ($i = 0; $i < count($indexes); $i++) {
    $index = $indexes[$i];
    $deserializeList[$index] = $letter;
  }  
}

ksort($deserializeList);

foreach ($deserializeList as $value) {
  echo $value . "";
}

?>