<?php

$timeDishes = 0;
$timeHouse = 0;
$timeLaundry = 0;

while (true) {
  $input = readline();
  if ($input == "wife is happy") { break; }

  $re_dishes = '/(?<dishes>[<][a-z0-9]+[>])/m';
  $re_house = '/(?<house>[[][A-Z0-9]+[]])/m';
  $re_laundry = '/(?<laundry>{(.*?)\})/m';
  $matches = '';
  $res = '';
  $validateReges = false;

  if (preg_match($re_dishes, $input)) {
    preg_match_all($re_dishes, $input, $matches, PREG_SET_ORDER, 0);
    $validateReges = true;
  } else if (preg_match($re_house, $input)) {
    preg_match_all($re_house, $input, $matches, PREG_SET_ORDER, 0);
    $validateReges = true;
  } else if (preg_match($re_laundry, $input)) {
    preg_match_all($re_laundry, $input, $matches, PREG_SET_ORDER, 0);
    $validateReges = true;
  }

  if ($validateReges == false) { continue; }
 
  foreach ($matches as $match) {

    //var_dump($match);
    
    if (key_exists("dishes", $match)) {
      $res = $match["dishes"];

      for ($i = 0; $i < strlen($res); $i++) {
        if (is_numeric($res[$i])) {
          $timeDishes += $res[$i];      
        }
      }

    } else if (key_exists("house", $match)) {
      $res = $match["house"];

      for ($i = 0; $i < strlen($res); $i++) {
        if (is_numeric($res[$i])) {
          $timeHouse += $res[$i];      
        }
      }

    } else if (key_exists("laundry", $match)) {
      $res = $match["laundry"];

      for ($i = 0; $i < strlen($res); $i++) {
        if (is_numeric($res[$i])) {
          $timeLaundry += $res[$i];      
        }
      }

    }
    
  }
  
// Print the entire match result
// var_dump($matches);
}

echo "Doing the dishes - $timeDishes min." . PHP_EOL;
echo "Cleaning the house - $timeHouse min." . PHP_EOL;
echo "Doing the laundry - $timeLaundry min." . PHP_EOL;
$total = $timeDishes + $timeHouse + $timeLaundry;
echo "Total - $total min." . PHP_EOL; 

?>