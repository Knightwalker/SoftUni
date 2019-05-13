<?php

$money = floatval(readline());
$moneyInitial = $money;
while (true) {
  $game = readline();
  if ($game == "Game Time") { break; }
  if ($money <= 0) { break; }

  if ($game == "OutFall 4") {
    if ($money >= 39.99) {
      $money -= 39.99;
      echo "Bought OutFall 4" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else if ($game == "CS: OG") {
    if ($money >= 15.99) {
      $money -= 15.99;
      echo "Bought CS: OG" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else if ($game == "Zplinter Zell") {
    if ($money >= 19.99) {
      $money -= 19.99;
      echo "Bought Zplinter Zell" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else if ($game == "Honored 2") {
    if ($money >= 59.99) {
      $money -= 59.99;
      echo "Bought Honored 2" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else if ($game == "RoverWatch") {
    if ($money >= 29.99) {
      $money -= 29.99;
      echo "Bought RoverWatch" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else if ($game == "RoverWatch Origins Edition") {
    if ($money >= 39.99) {
      $money -= 39.99;
      echo "Bought RoverWatch Origins Edition" . PHP_EOL;
    } else {
      echo "Too Expensive" . PHP_EOL;
      continue;
    }
  } else {
    echo "Not Found" . PHP_EOL;
  }

}

if ($money <= 0) {
  echo "Out of money!" . PHP_EOL;
} else {
  $money = number_format($money, 2, ".", "");
  $moneyDiff = number_format($moneyInitial - $money, 2, ".", "");
  echo "Total spent: $$moneyDiff. Remaining: $$money";  
}

?>