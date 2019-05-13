<?php

$input = "";
$goldMiner = [];

while (true) {
  $input = readline();
  if ($input == "stop") { break; } 
  $type = $input;
  $karats = readline();

  if(!key_exists($type, $goldMiner)) {
    $goldMiner[$type] = 0;
  }
  $goldMiner[$type] += $karats; 

}

foreach ($goldMiner as $key => $value) {
  echo $key . " -> " . $value . "K" . PHP_EOL;;
}

?>