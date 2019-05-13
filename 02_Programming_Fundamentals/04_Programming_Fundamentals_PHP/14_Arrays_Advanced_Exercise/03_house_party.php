<?php

$n = intval(readline());
$arr = [];
$commands = [];

for ($i = 0; $i < $n; $i++) {
  $commands = explode(" ", readline());
  $command = $commands[2];

  if ($command == "going!") {
    $name = $commands[0];

    if (in_array($name, $arr) == true) {
      echo $name . " is already in the list!" . PHP_EOL;
    } else {
      $arr[] = $name;
    }

  } else if ($command == "not") {
    $name = $commands[0];

    if (in_array($name, $arr) == true) {
      $pos = array_search($name, $arr);
      array_splice($arr, $pos, 1);
    } else {
      echo $name . " is not in the list!" . PHP_EOL;
    }
  }

}

foreach ($arr as $value) {
  echo $value . PHP_EOL;
}

?>