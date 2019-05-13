<?php

$input = readline();
$searchArr = [
  ".",
  ",",
  "?",
  "!"
];
$input = str_replace($searchArr, " ", $input);
$input = preg_split('/ +/', $input);
$search = readline();
$counter = 0;

foreach ($input as $word) {
  if ($word == $search) {
    $counter++;
  }
}

echo $counter;
//var_dump($input);

?>