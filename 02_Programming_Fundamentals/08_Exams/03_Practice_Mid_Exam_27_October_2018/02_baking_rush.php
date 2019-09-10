<?php

$events = explode("|", readline());
$energy = 100;
$coins = 100;
$dayCompleted = true;
$end = false;

for ($i = 0; $i < count($events); $i++) {
  if ($end == true) { break; }
  $commands = explode("-", $events[$i]);

  $command = $commands[0];
  $value = $commands[1];

  //var_dump($command);
  //var_dump($value);
  //var_dump($energy);

  if ($command == "rest") {
    if (($energy + $value) >= 100) {
      echo "You gained " . (100 - $energy) . " energy." . PHP_EOL;
      $energy = 100;
    } else {
      $energy += $value;
      echo "You gained $value energy." . PHP_EOL;
    } 
    echo "Current energy: $energy." . PHP_EOL;

  } else if ($command == "order") {
    if (($energy - 30) >= 0) {
      $energy -= 30;
      $coins += $value;
      echo "You earned $value coins." . PHP_EOL;
    } else {
      $energy += 50;
      echo "You had to rest!" . PHP_EOL;
    }

  } else {
      $coins -= $value;

      if ($coins > 0) {
        echo "You bought $command." . PHP_EOL;
      } else {
        echo "Closed! Cannot afford $command." . PHP_EOL;
        $end = true;
        $dayCompleted = false;
        break;
    }
  }

}

if ($dayCompleted == true) {
  echo "Day completed!" . PHP_EOL;
  echo "Coins: $coins" . PHP_EOL;
  echo "Energy: $energy" . PHP_EOL;
}

?>