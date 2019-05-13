<?php 

$n = floatval(readline());
$biggestSnowballSnow = 0;
$biggestSnowballTime = 0;
$biggestSnowballQuality = 0;
$biggestSnowballValue = 0;

$currentSnowballValue = 0;

for ($i = 0; $i < $n; $i++) {
  $snowballSnow = floatval(readline());
  $snowballTime = floatval(readline());
  $snowballQuality = floatval(readline());

  $currentSnowballValue = bcpow($snowballSnow / $snowballTime, $snowballQuality);

  if ($currentSnowballValue >= $biggestSnowballValue) {
    $biggestSnowballSnow = $snowballSnow;
    $biggestSnowballTime = $snowballTime;
    $biggestSnowballQuality = $snowballQuality;
    $biggestSnowballValue = $currentSnowballValue;
  }

}

echo "$biggestSnowballSnow : $biggestSnowballTime = $biggestSnowballValue ($biggestSnowballQuality)";

?>