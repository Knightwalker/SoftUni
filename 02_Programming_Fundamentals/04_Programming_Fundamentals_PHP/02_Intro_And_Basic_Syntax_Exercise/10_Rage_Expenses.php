<?php 

$LostGames = intval(readline());
$PriceHeadset = floatval(readline());
$PriceMouse = floatval(readline());
$PriceKeyboard = floatval(readline());
$PriceDisplay = floatval(readline());

$counterEachSecondGame = 0;
$counterEachThirdGame = 0;

$counterHeadset = 0;
$counterMouse = 0;
$counterKeyboard= 0;
$counterDisplay = 0;

for($i = 1; $i <= $LostGames; $i++) {
  $counterEachSecondGame++;
  $counterEachThirdGame++;

  if($counterEachSecondGame == 2) {
    $counterHeadset++;
  }
  if($counterEachThirdGame == 3) {
  $counterMouse++;

    if($counterEachSecondGame == 2) {
    $counterKeyboard++;

      if($counterKeyboard % 2 == 0) {
        $counterDisplay++;
      }
    }
  }

if ($counterEachSecondGame == 2) { $counterEachSecondGame = 0; }
if ($counterEachThirdGame == 3) { $counterEachThirdGame = 0; }
}

$sum = $PriceHeadset * $counterHeadset + $PriceMouse * $counterMouse + $PriceKeyboard * $counterKeyboard + $PriceDisplay * $counterDisplay;

echo "Rage expenses: " . number_format($sum, 2, '.', '') . " lv.";

?>