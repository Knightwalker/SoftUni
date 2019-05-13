<?php

$n = intval(readline());

echo GetMultipleOfEvensAndOdds($n);

function GetMultipleOfEvensAndOdds($n) {
  $n = abs($n);
  $sumEvens = GetSumOfEvens($n);
  $sumOdds = GetSumOfOdds($n);
  return $sumEvens * $sumOdds;
}

function GetSumOfEvens($n) {
  $sum = 0;
  
  while ($n > 0)
  {
      $lastDigit = $n % 10;
      if ($lastDigit % 2 == 0)
          $sum += $lastDigit;
      $n /= 10;
  }

  return $sum;

}

function GetSumOfOdds($n) {
  $sum = 0;

  while ($n > 0)
  {
    $lastDigit = $n % 10;
    if ($lastDigit % 2 != 0)
        $sum += $lastDigit;
    $n /= 10;
  }

  return $sum;
}

?>