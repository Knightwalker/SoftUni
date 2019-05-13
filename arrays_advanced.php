<?php

// Adding element to the end
$array[] = $var;

// Adding array elements to the end
array_push($arr, $elementArr);

// Removing element from the end
array_pop($arr);

// Add element to the begining
array_unshift($arr, $element);

// Remove element from the begining and returns its value
array_shift($arr);

// Element RemoveAt and Reindex.
array_splice($arr, $pos, 1);

// array_search() – searching for given value and returns index
// in_array() – searching for given value and returns boolean

// Deletes element and reindexes.
// Uses array_splice() function.
function arrElementRemoveAndReindex($arr, $num) {
  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $num) {
      array_splice($arr, $i, 1);
      $i--;
    }
  }
  return $arr;
}

// Inserts element at position and reindexes.
// Uses array_splice() function
function arrElementInsertAtAndReindex($arr, $num, $pos) {
  array_splice($arr, $pos, 0, $num);
  return $arr;
}

// Swaps two elements at a given index.
function arrSwapElementsAtIndex($arr, $indexOne, $indexTwo) {
  $tempElement = $arr[$indexOne];
  $arr[$indexOne] = $arr[$indexTwo];
  $arr[$indexTwo] = $tempElement;
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