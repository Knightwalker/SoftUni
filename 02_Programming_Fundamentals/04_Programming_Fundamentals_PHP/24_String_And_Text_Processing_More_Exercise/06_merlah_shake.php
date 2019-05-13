<?php

$input = readline();
$shake = readline();

while (true) {
  //$inputstop = readline();
  if (strlen($shake) <= 0) { 
    echo "No shake." . PHP_EOL;
    echo $input . PHP_EOL;
    break; 
  } else if (substr_count($input, $shake) <= 1) {
    echo "No shake." . PHP_EOL;
    echo $input . PHP_EOL;
    break;     
  }

  $needleOneStart = strpos($input, $shake); 
  $needleOneEnd = $needleOneStart + strlen($shake) - 1;

  $needleTwoStart = strripos($input, $shake);
  $needleTwoEnd = $needleTwoStart + strlen($shake) - 1;

  $inputArr = str_split($input);
  //var_dump($inputArr);

  for ($i = $needleOneStart; $i <= $needleOneEnd; $i++) {
    $inputArr[$i] = "del";
  }
  for ($i = $needleTwoStart; $i <= $needleTwoEnd; $i++) {
    $inputArr[$i] = "del";
  }
  for ($i = 0; $i < count($inputArr); $i++) {
    if ($inputArr[$i] == "del") {
      array_splice($inputArr, $i, 1);
      $i--;
    }
  }

  //var_dump($inputArr);
  echo "Shaked it." . PHP_EOL;

  $input = "";
  foreach ($inputArr as $letters) {
    $input .= $letters;
  }

  $shakeArr = str_split($shake);
  $shakeDel = floor(strlen($shake) / 2);
  array_splice($shakeArr, $shakeDel, 1);
  $shake = "";
  foreach ($shakeArr as $letters) {
    $shake .= $letters;
  }

  //var_dump($shake);

}

?>