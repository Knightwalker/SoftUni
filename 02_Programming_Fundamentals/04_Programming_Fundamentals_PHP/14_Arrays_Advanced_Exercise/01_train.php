<?php

$wagons = array_map("intval", explode(" ", readline()));
$wagonCapacity = intval(readline());
$commands = [];

while (true) {
  $commands = explode(" ", readline());
  $command = $commands[0];

  if ($command == "end") { 
    break; 
  } else if ($command == "Add") {
    $passengers = intval($commands[1]);
    $wagons[] += $passengers;
  } else {
    $passengers = intval($commands[0]);

    for ($i = 0; $i < count($wagons); $i++) {
      
      if (($wagons[$i] + $passengers) <= $wagonCapacity) {
        $wagons[$i] += $passengers;
        break;
      }
      
    }

  }

}

foreach ($wagons as $value) {
    echo $value . " ";
}

?>