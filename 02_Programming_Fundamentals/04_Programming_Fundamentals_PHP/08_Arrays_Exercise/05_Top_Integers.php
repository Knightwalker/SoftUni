<?php

$arr = explode(" ", readline());
createTopInteger($arr);

// This finds all the top integers in an array and creates a "Top Integer" array from them.
// A top integer is an integer which is bigger than all the elements to its right. 
// Example [1, 4, 3, 2] -> [4, 3, 2]
// Example [14 24 3 19 15 17] -> [24, 19, 17]
// Example [27, 19, 42, 2, 13, 45, 48] -> [48]
function createTopInteger($arr) {

  $counter = 0;
  $isBigger = true;
  $topArr = [];

  for ($i = 0; $i < count($arr); $i++) {
    //echo "loop $i" . PHP_EOL;

    for ($j = $counter; $j < count($arr) - 1; $j++) {
      
      //echo "cechking if " . $arr[$i] . " is more that " . $arr[$counter + 1] . PHP_EOL;

      if (!($arr[$i] > $arr[$j + 1])) {
        $isBigger = false;
      }

    }    

    if ($isBigger ==  true) {
        $topArr[] += $arr[$i];
    }
    
    $isBigger = true;
    $counter++;

  }


  for ($i = 0; $i < count($topArr); $i++) {
    echo $topArr[$i] . " "; 
  }
  echo PHP_EOL;

  //var_dump($topArr);

}

?>