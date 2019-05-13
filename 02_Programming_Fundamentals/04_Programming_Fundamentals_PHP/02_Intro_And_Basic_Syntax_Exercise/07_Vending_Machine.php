<?php 

$inputCoins = "";
$coins = 0;
$totalCoins = 0;

$inputProducts = "";
$nutsPrice = 2.0;
$waterPrice = 0.7;
$crispsPrice = 1.5; 
$sodaPrice = 0.8;
$cokePrice = 1.0;

while (true) 
{
  $inputCoins = readline();
  if ($inputCoins == "Start") { break; }
  $coins = floatval($inputCoins);

  if ($coins == 0.1 || $coins == 0.2 || $coins == 0.5 || $coins == 1 || $coins == 2) {
    $totalCoins += $coins;
  } else {
    echo "Cannot accept $coins" . PHP_EOL;
  }
}

while (true) 
{
  $inputProducts = readline();
  if ($inputProducts == "End") { break; }

  if ($inputProducts == "Nuts") {
    if ($totalCoins >= $nutsPrice) { echo "Purchased nuts" . PHP_EOL; $totalCoins -= $nutsPrice; } 
    else { echo "Sorry, not enough money" . PHP_EOL; }
  } else if ($inputProducts == "Water") {
    if ($totalCoins >= $waterPrice) 
    { 
      echo "Purchased water" . PHP_EOL;
      $totalCoins -= $waterPrice; 
    } 
    else 
    { 
      echo "Sorry, not enough money" . PHP_EOL; 
    }
  }
  else if ($inputProducts == "Crisps") 
  {
    if ($totalCoins >= $crispsPrice) 
    { 
      echo "Purchased crisps" . PHP_EOL; 
      $totalCoins -= $crispsPrice;
    } 
    else 
    { 
      echo "Sorry, not enough money" . PHP_EOL; 
    }
  }
  else if ($inputProducts == "Soda") 
  {
    if ($totalCoins > $sodaPrice) 
    { 
      echo "Purchased soda" . PHP_EOL; 
      $totalCoins -= $sodaPrice;
    } else if ((string)$totalCoins == (string)$sodaPrice) {
      echo "Purchased soda" . PHP_EOL; 
      $totalCoins -= $sodaPrice;
    }
    else 
    { 
      echo "Sorry, not enough money" . PHP_EOL;
    }
  }
  else if ($inputProducts == "Coke") 
  {
    if ($totalCoins >= $cokePrice) 
    { 
      echo "Purchased coke" . PHP_EOL; 
      $totalCoins -= $cokePrice;
    } 
    else 
    { 
      echo "Sorry, not enough money" . PHP_EOL; 
    }
  }
  else 
  {
    echo "Invalid product" . PHP_EOL;
  }
}

$totalCoins = number_format($totalCoins, 2, '.', '');
if ($totalCoins < 0.1) {
  $totalCoins = number_format(abs($totalCoins), 2, '.', '');
  echo "Change: $totalCoins" . PHP_EOL;
} else {
  echo "Change: $totalCoins" . PHP_EOL;
}

?>