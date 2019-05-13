<?php

$input = "";
$juiceList = [];
$bottlesList = [];

while (true) {
$input = readline();
if ($input == "End") { break; }
$inputArr = explode(" => ", $input);

$juiceName = $inputArr[0];
$juiceQuantity = intval($inputArr[1]);

if (!key_exists($juiceName, $juiceList)) {
  $juiceList[$juiceName] = 0;
}
$juiceList[$juiceName] += $juiceQuantity;

if ($juiceList[$juiceName] >= 1000) {
  $number = $juiceList[$juiceName];
  $bottles = 0;
  if (!key_exists($juiceName, $bottlesList)) {
    $bottlesList[$juiceName] = 0;
  }
  while($number >= 1000) {
    $bottles++;
    $number -= 1000;
  }
  $bottlesList[$juiceName] = $bottles;
}

//var_dump($juiceList);
//var_dump($bottlesList);

}

foreach ($bottlesList as $juice => $bottles) {
  echo $juice . " => " . $bottles . PHP_EOL;
}

?>