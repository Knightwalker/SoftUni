<?php

$pokemonsArr = array_map("intval", explode(" ", readline()));
$pokemonsLen = count($pokemonsArr);
$pokemonsN = 0;

while (true) {
  $pokemonsLen = count($pokemonsArr);
  if ($pokemonsLen <= 0) { break; }
  $currentIndex = intval(readline());

  $currentN = 0;

  if ($currentIndex >= 0 && $currentIndex <= count($pokemonsArr) - 1) {
    $currentN = $pokemonsArr[$currentIndex];
    array_splice($pokemonsArr, $currentIndex, 1);
    $pokemonsN += $currentN;

  } else if ($currentIndex < 0) {
    $currentN = $pokemonsArr[0];
    $pokemonsArr[0] = $pokemonsArr[count($pokemonsArr) - 1];
    $pokemonsN += $currentN;

  } else if ($currentIndex > count($pokemonsArr) - 1) {
    $currentN = $pokemonsArr[count($pokemonsArr) - 1];
    $pokemonsArr[count($pokemonsArr) - 1] = $pokemonsArr[0];
    $pokemonsN += $currentN;

  }

    for ($i = 0; $i < count($pokemonsArr); $i++) {
      if ($pokemonsArr[$i] <= $currentN) {
        $pokemonsArr[$i] += $currentN;
      } else if ($pokemonsArr[$i] > $currentN) {
        $pokemonsArr[$i] -= $currentN;
      }
    }

}

echo $pokemonsN;

?>