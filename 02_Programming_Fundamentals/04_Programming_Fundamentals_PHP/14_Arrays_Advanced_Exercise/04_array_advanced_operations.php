<?php

$arr = array_map("intval", explode(" ", readline()));

while(true) {
  $commands = explode(" ", readline());
  if ($commands[0] == "End") { break; }

  $command = $commands[0];
  if ($command == "Add") {
    $number = intval($commands[1]);
    array_push($arr, $number);

  } else if ($command == "Insert") {
    $number = intval($commands[1]);
    $index = intval($commands[2]);

    if (!($index >= 0 && $index < count($arr))) {
      echo "Invalid index" . PHP_EOL;
    } else {
      $arr = arrElementInsertAtAndReindex($arr, $number, $index);
    }

  } else if ($command == "Remove") {
    $index = $commands[1];

    if (!($index >= 0 && $index < count($arr))) {
      echo "Invalid index" . PHP_EOL;
    } else {
      $arr = arrRemoveAtIndexAndReindex($arr, $index);
    }

  } else if ($command == "Shift") {
    $mode = $commands[1];
    $n = intval($commands[2]);
    $arr = arrayShift($arr, $n, $mode);

  }

}

foreach ($arr as $value) {
  echo $value . " ";
}

// array_splice() inserts element at position and reindexes.
function arrElementInsertAtAndReindex($arr, $num, $pos) {
  array_splice($arr, $pos, 0, $num);
  return $arr;
}

// array_splice() deletes element at index and reindexes.
function arrRemoveAtIndexAndReindex($arr, $index) {
  array_splice($arr, $index, 1);
  return $arr;
}

// array_shift to left and right a number of times
// Left = first number becomes last – count times
// Right = last number becomes first - count times
function arrayShift($arr, $n, $mode) {
  $tempArr = [];
  $tempNum = "";

  // Fill the array with elements
  for ($i = 0; $i < count($arr); $i++) {
    $tempArr[] = 0;
  }

  if ($mode == "left") {
    
    for ($i = 0; $i < $n; $i++) {
      $tempNum = $arr[0];

      for ($i2 = 0; $i2 < count($arr) - 1; $i2++) {
        $tempArr[$i2] = $arr[$i2 + 1];
      }

      for ($i2 = 0; $i2 < count($arr) - 1; $i2++) {
        $arr[$i2] = $tempArr[$i2];
      }
  
      $arr[count($arr) - 1] = $tempNum;

    }

  } else if ($mode == "right") {

    for ($i = 0; $i < $n; $i++) {
      $tempNum = $arr[count($arr) - 1];

      for ($i2 = 0; $i2 < count($arr) - 1; $i2++) {
        $tempArr[$i2 + 1] = $arr[$i2];
      }

      $tempArr[0] = $tempNum;

      for ($i2 = 0; $i2 < count($arr); $i2++) {
        $arr[$i2] = $tempArr[$i2];
      }  

    }

  }

  return $arr;
}

?>