<?php

$groupSize = intval(readline());
$packageType = readline();

$hallType = "";
$price = 0;
$discount = 0.0;
$pricePerPerson = 0;

if ($groupSize < 120) {
  
  if ($groupSize <= 50) {
    $hallType = "Small Hall";
    $price = 2500;
  } else if ($groupSize > 50 && $groupSize <= 100) {
    $hallType = "Terrace";
    $price = 5000;
  } else if ($groupSize > 100 && $groupSize <= 120) {
    $hallType = "Great Hall";
    $price = 7500;
  }

  if ($packageType == "Normal") {
    $price += 500;
    $discount = 0.05;
  } else if ($packageType == "Gold") {
    $price += 750;
    $discount = 0.10;
  } else if ($packageType == "Platinum") {
    $price += 1000;
    $discount = 0.15;
  }

  $price -= $price * $discount;
  $pricePerPerson = $price / $groupSize;
  $pricePerPerson = number_format($pricePerPerson, 2, '.', '');

  echo "We can offer you the $hallType \n";
  echo "The price per person is $pricePerPerson\$ \n";

} else {
  echo "We do not have an appropriate hall.";
}

?>