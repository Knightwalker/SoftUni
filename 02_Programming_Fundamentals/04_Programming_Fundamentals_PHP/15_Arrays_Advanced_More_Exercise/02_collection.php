<?php

$arr = [];
$commands = "";

while (true) {
  $commands = explode(" ", readline());
  if ($commands[0] == "Print") { break; }

  $command = $commands[0];

  if ($command == "Push") {
    $element = $commands[1];
    array_unshift($arr, $element);
  } else if ($command == "Add") {
    $element = $commands[1];
    array_push($arr, $element);
  } else if ($command == "Pop") {
    array_shift($arr);
  } else if ($command == "Enqueue") {
    array_pop($arr);
  }

}

echo implode(" ", $arr);

?>