<?php

$command = "";

$bestBatch = [];
$sumBestBatch = PHP_INT_MIN ;
$lenBestBatch = PHP_INT_MIN;
$qualityBestBatch = PHP_FLOAT_MIN;
$arrLenBestBatch = PHP_INT_MIN;

while (true) {
  $command = readline();
  if ($command == "Bake It!") { break; }
  $currentBatch = array_map("intval", explode("#", $command));
   
  $sumCurrentBatch = 0;
  $lenCurrentBatch = 0;
  $qualityCurrentBatch = 0;
  $arrLenCurrentBatch = count($currentBatch); 

  foreach ($currentBatch as $value) {
    $sumCurrentBatch += $value;
    $lenCurrentBatch += 1;
  }
  $qualityCurrentBatch = $sumCurrentBatch / $lenCurrentBatch;

  //echo "Sum Current Batch $sumCurrentBatch" . PHP_EOL;
  //var_dump($currentBatch);

  if ($sumCurrentBatch > $sumBestBatch) {  // check bestTotalQuality
    $bestBatch = $currentBatch;
    $sumBestBatch = $sumCurrentBatch;
    $lenBestBatch = $lenCurrentBatch;
    $qualityBestBatch = $qualityCurrentBatch;
    $arrLenBestBatch = $arrLenCurrentBatch;

  } else if ($sumCurrentBatch == $sumBestBatch) { //check average quality
    if ($qualityCurrentBatch > $qualityBestBatch) {
      $bestBatch = $currentBatch;
      $sumBestBatch = $sumCurrentBatch;
      $lenBestBatch = $lenCurrentBatch;
      $qualityBestBatch = $qualityCurrentBatch;
      $arrLenBestBatch = $arrLenCurrentBatch;

    } else if ($qualityCurrentBatch == $qualityBestBatch) { //check the fewest elemen (length).
      if ($arrLenCurrentBatch < $arrLenBestBatch) {
        $bestBatch = $currentBatch;
        $sumBestBatch = $sumCurrentBatch;
        $lenBestBatch = $lenCurrentBatch;
        $qualityBestBatch = $qualityCurrentBatch;
        $arrLenBestBatch = $arrLenCurrentBatch;
      }
    }
  }

}

echo "Best Batch quality: $sumBestBatch" . PHP_EOL;
echo implode(" ", $bestBatch);

?>