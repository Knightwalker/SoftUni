<?php

$playersCards = [];
$playersCardsPower = [];
$input = "";

while (true) {
  $input = readline();
  if ($input == "JOKER") { break; }

  $inputArr = explode(": ", $input);
  $name = $inputArr[0];
  $inputArr2 = explode(", ", $inputArr[1]);
  //var_dump($name);
  //var_dump($inputArr2);

  for ($i = 0; $i < count($inputArr2); $i++) {
    $currentCard = $inputArr2[$i];

    if (!key_exists($name, $playersCards)) {
      $playersCards[$name] = [];
    }
    $playersCards[$name][] = $currentCard;
  }

}

foreach ($playersCards as $players => $cardsArr) {
  $cardsArr = array_unique($cardsArr);
  $sum = 0;

  foreach ($cardsArr as $cards) {
    $currentCard = $cards;
    
    if ($currentCard[0] == "1") {
      $power = $currentCard[0];
      $power .= $currentCard[1];
      $type = $currentCard[2];
    } else {
      $power = $currentCard[0];
      $type = $currentCard[1];
    }

    if ($power == "J") {
      $power = "11";
    } else if ($power == "Q") {
      $power = "12";
    } else if ($power == "K") {
      $power = "13";
    } else if ($power == "A") {
      $power = "14";
    }

    if ($type == "S") {
      $type = "4";
    } else if ($type == "H") {
      $type = "3";
    } else if ($type == "D") {
      $type = "2";
    } else if ($type == "C") {
      $type = "1";
    }

    $sum += intval($power) * intval($type);

  }

   if (!key_exists($players, $playersCardsPower)) {
     $playersCardsPower[$players] = 0;
   }
   $playersCardsPower[$players] += $sum;

}

foreach ($playersCardsPower as $players => $cards) {
  echo $players . ": " . $cards . PHP_EOL;
}

?>