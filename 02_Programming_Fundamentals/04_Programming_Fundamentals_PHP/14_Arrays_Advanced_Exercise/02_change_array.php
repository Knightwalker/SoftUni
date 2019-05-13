<?php

$arr = array_map("intval", explode(" ", readline()));
$commands = "";

  //var_dump($arr);

while (true) {
  $commands = explode(" ", readline());
  $command = $commands[0];

  if ($command == "Odd") {
    printOdd($arr);
    break;
  } else if ($command == "Even") {
    printEven($arr);
    break;
  } else if ($command == "Delete") {
    $number = intval($commands[1]);
    $arr = arrElementRemoveAndReindex($arr, $number);
  } else if ($command == "Insert") {
    $number = intval($commands[1]);
    $position = intval($commands[2]);
    $arr = arrElementInsertAtAndReindex($arr, $number, $position);
  }

  //var_dump($arr);

}

// array_splice() deletes element and reindexes.
function arrElementRemoveAndReindex($arr, $num) {

  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $num) {
      array_splice($arr, $i, 1);
      $i--;
    }
  }

  return $arr;

}

// array_splice() inserts element at position and reindexes.
function arrElementInsertAtAndReindex($arr, $num, $pos) {
  array_splice($arr, $pos, 0, $num);
  return $arr;
}

function printOdd($arr) {
  foreach ($arr as $value) {
    if (!($value % 2 == 0)) {
      echo $value . " ";
    }
  }
}

function printEven($arr) {
  foreach ($arr as $value) {
    if ($value % 2 == 0) {
      echo $value . " ";
    }
  }
}

?>