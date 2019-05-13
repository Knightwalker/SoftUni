<?php

$input = readline();
$list = [];
$list[] = "";
$index = 0;
$res = "";

for ($i = 0; $i < strlen($input) - 1; $i++) {
  if ($input[$i] == $input[$i + 1]) {
    $list[$index] = $input[$i];
  } else {
    $list[$index] = $input[$i];
    $index++;
  }
}

foreach ($list as $word) {
  $res .= $word;
}

if ($res[strlen($res) - 1] != $input[strlen($input) - 1]) {
  $res .= $input[strlen($input) - 1];
}

echo $res;

// Using RegEx
// $input = readline();
// echo preg_replace("/(.)\\1+/", "$1", $input);

?>


