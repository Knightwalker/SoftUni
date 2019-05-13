<?php

$arr = explode(" ", readline());

for($i = 0; $i < count($arr); $i++) {
  $arr[$i] = intval($arr[$i]);
}

//var_dump($arr);

while(true) {
  $commands = explode(" ", readline());
  if ($commands[0] == "end") { break; }

  // BEGIN exchange {index}  
  if ($commands[0] == "exchange") {
    $command = $commands[0]; 
    $index = $commands[1];

    if ($index >= count($arr)) {
      echo "Invalid index" . PHP_EOL;
    } else {
      $re_counter = 0;
      $counter = 0;

      $subArrOne = [];
      $subArrTwo = [];

      for ($i = 0; $i <= $index; $i++) {
        $subArrOne[] = $arr[$i];
      }

      for ($i = $index + 1; $i < count($arr); $i++) {
        $subArrTwo[] = $arr[$i];
      }

      //var_dump($subArrOne);
      //var_dump($subArrTwo);

      // Re-populate original arr with new values
      for ($i = $index + 1; $i < count($arr); $i++) {
        $arr[$re_counter] = $subArrTwo[$counter];
        $re_counter++;
        $counter++;
      }

      $counter = 0;

      for ($i = 0; $i <= $index; $i++) {
        $arr[$re_counter] = $subArrOne[$counter];
        $re_counter++;
        $counter++;
      }
      
      //var_dump($arr);
    }

  }
  // END exchange {index} 

  // BEGIN max even/odd
  // BEGIN min even/odd
  if ($commands[0] == "max" || $commands[0] == "min") { 
    $command = $commands[0]; 
    $mode = $commands[1];

    if ($command == "max") {
      if ($mode == "even") {
        $maxEven = -999999;
        $maxEvenIndex = 0;
        $foundEvenElement = false;

        for($i = 0; $i < count($arr); $i++) {
          if ($arr[$i] % 2 == 0) {

            $currentNum = $arr[$i];

            if ($currentNum >= $maxEven) {
              $maxEven = $currentNum;
              $maxEvenIndex = $i;
              $foundEvenElement = true;
            }

          } 

        }

        if ($foundEvenElement = true) {
          echo $maxEvenIndex . PHP_EOL;
        } else {
          echo "No matches" . PHP_EOL;
        }

      } else if ($mode == "odd") {
        $maxOdd = -999999;
        $maxOddIndex = 0;
        $foundOddElement = false;

        for($i = 0; $i < count($arr); $i++) {
          if (!($arr[$i] % 2 == 0)) {

            $currentNum = $arr[$i];

            if ($currentNum >= $maxOdd) {
              $maxOdd = $currentNum;
              $maxOddIndex = $i;
              $foundOddElement = true;
            }

          } 

        }

        if ($foundEvenElement = true) {
          echo $maxOddIndex . PHP_EOL;
        } else {
          echo "No matches" . PHP_EOL;
        }

      }

    }

  }
  // END max even/odd
  // END min even/odd

}
// END while loop

echo "[";
for($i = 0; $i < count($arr); $i++) {
  if ($i < count($arr) - 1) {
    echo $arr[$i] . ", ";
  } else { 
    echo $arr[$i]; 
  }
}
echo "]";

?>