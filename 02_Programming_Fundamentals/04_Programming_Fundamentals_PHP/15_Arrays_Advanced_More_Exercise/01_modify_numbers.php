<?php

$arr = array_map("intval", explode(" ", readline()));
$commands = "";

while (true) {
  $commands = explode(" ", readline());
  if ($commands[0] == "end") { break; }
  $command = $commands[0];

  if ($command == "swap") {
    $indexOne = $commands[1];
    $indexTwo = $commands[2];
    $arr = arrSwapElementsAtIndex($arr, $indexOne, $indexTwo);

  } else if ($command == "multiply") {
    $indexOne = $commands[1];
    $indexTwo = $commands[2];
    $number = $arr[$indexOne];
    $number *= $arr[$indexTwo];
    $arr[$indexOne] = $number;
  
  } else if ($command == "decrease") {
    $number = intval($commands[1]);
    for ($i = 0; $i < count($arr); $i++) {
      $arr[$i] -= $number;
    }

  } else if ($command == "increase") {
    $number = intval($commands[1]);
    for ($i = 0; $i < count($arr); $i++) {
      $arr[$i] += $number;
    }

  } else if ($command == "remove") {
    $index = intval($commands[1]);
    array_splice($arr, $index, 1);
  }

}

echo implode(", ", $arr);

// Swaps Two Elements at a given Index.
function arrSwapElementsAtIndex($arr, $indexOne, $indexTwo) {
  $tempElement = $arr[$indexOne];
  $arr[$indexOne] = $arr[$indexTwo];
  $arr[$indexTwo] = $tempElement;
  return $arr;
}

?>