<?php

$partySize = readline();
$days = readline();
$motivationalParty = false;

$earnedCoins = 0;

for ($i = 1; $i <= $days; $i++) {
  if ($i % 10 == 0) {
    $partySize -= 2;
  }
  if ($i % 15 == 0) {
    $partySize += 5;
  }

  $earnedCoins += 50;
  $earnedCoins -= $partySize * 2;

  if ($i % 3 == 0) {
    $earnedCoins -= $partySize * 3;
    $motivationalParty = true;

  } 
  if ($i % 5 == 0) {
    $earnedCoins += $partySize * 20;
     
    if ($motivationalParty == true) {
      $earnedCoins -= $partySize * 2;
    }
      
  }

  $motivationalParty = false;

}

echo $partySize . " companions received " . floor($earnedCoins / $partySize) . " coins each."; 

?>