<?php

$numbersArr = [];
for ($i = 0; $i < 3; $i++) {
  $numbersArr[] = readline();
}

arsort($numbersArr);

foreach ($numbersArr as $numbers) {
  echo $numbers . PHP_EOL;
}

?>