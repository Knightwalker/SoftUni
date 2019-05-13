<?php

$input = str_split(readline());
$power = 0;

for ($i = 0; $i < count($input); $i++) {
  
  if ($input[$i] == ">") {
    $power += $input[$i + 1];
    continue;
  }

  if ($power > 0) {
    array_splice($input, $i, 1);
    $power--;
    $i--;
  }

}

foreach ($input as $letters) {
  echo $letters . "";
}


?>