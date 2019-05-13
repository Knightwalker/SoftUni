<?php

$arr = array_map("intval", explode(" ", readline()));
$commands = [];

while (true) {
  $commands = explode(" ", readline());
  if ($commands[0] == "end") { 
    break; 
  } else {
    $command = strtolower($commands[0]);
    $element = intval($commands[1]);

    if ($command == "add") {
      array_push($arr, $element);
    } else if ($command == "remove") {
      $index = array_search($element, $arr);
      unset($arr[$index]);
    } else if ($command == "removeat") {
      array_splice($arr, $element, 1);
    } else if ($command == "insert") {
      $index = intval($commands[2]);

      $firstPart = array_slice($arr, 0, $index);
      $addElement = array($element);
      $lastPart = array_slice($arr, $index);
      $arr = array_merge($firstPart, $addElement, $lastPart);

    }

  }

}

echo implode($arr, " ");

?>