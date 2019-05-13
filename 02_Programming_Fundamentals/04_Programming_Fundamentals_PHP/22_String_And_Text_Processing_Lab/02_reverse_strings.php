<?php

$listOfStrings = [];
while (true) {
  $input = readline();
  if ($input == "end") { break; }
  $listOfStrings[] = $input;
}

foreach ($listOfStrings as $strings) {
  echo $strings . " = " . strrev($strings) . PHP_EOL;
}

?>