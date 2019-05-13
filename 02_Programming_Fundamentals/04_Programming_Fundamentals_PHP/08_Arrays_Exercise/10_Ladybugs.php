<?php

$size = readline();
$ladybugsPositions = explode(" ", readline());
$ladybugsArr = [];

// Initialize array
for($i = 0; $i < $size; $i++) {
  $ladybugsArr[] = 0;
}

//var_dump($ladybugsArr);

for($i = 0; $i < count($ladybugsPositions); $i++) {
  $ladybugsIndex = $ladybugsPositions[$i];
  if ($ladybugsIndex >= 0 && $ladybugsIndex < $size) {
    $ladybugsArr[$ladybugsIndex] = 1;
  } 
}

$input = "";

while(true) {
  //echo "loop start" .PHP_EOL;
  //var_dump($ladybugsArr);

  $input = readline();
  if($input == "end") { break; }

  $newInput = explode(" ", $input);
  $ladybugsIndex = intval($newInput[0]);
  $command = $newInput[1];
  $jumpLength = intval($newInput[2]);

  if ($ladybugsArr[$ladybugsIndex] !== 1 || $ladybugsIndex < 0 || $ladybugsIndex >= count($ladybugsArr)) { continue; }

  if ($jumpLength < 0) {
    $jumpLength = abs($jumpLength);
    if($command == "right") { $command = "left";}
    else if($command == "left") { $command = "right";}
  }

  $ladybugsArr[$ladybugsIndex] = 0;

  // Ladybug jumps to the right
  if ($command == "right") {
    $newPosition = $ladybugsIndex + $jumpLength;

    // Jump another time if there is a ladybug
    if (array_key_exists($newPosition, $ladybugsArr)) {
      if ($ladybugsArr[$newPosition] == 1) {
        $newPosition = $newPosition + $jumpLength;
      }
    }

    if ($newPosition < count($ladybugsArr)) {
      $ladybugsArr[$newPosition] = 1;
    }

  // Ladybug jumps to the left
  } else if ($command == "left")  {
   $newPosition = $ladybugsIndex - $jumpLength;

    // Jump another time if there is a ladybug
    if (array_key_exists($newPosition, $ladybugsArr)) {
      if ($ladybugsArr[$newPosition] == 1) {
        $newPosition = $newPosition - $jumpLength;
      }
    }

    if ($newPosition >= 0) {
      $ladybugsArr[$newPosition] = 1;
    }

  }

}

// Output
for($i = 0; $i < count($ladybugsArr); $i++) {
  echo $ladybugsArr[$i] . " ";
}

?>