<?php

$n = readline();
$input = readline();
$countWhileLoop = 0;

$bestDNA = [];
$bestDNA_number = 0;

while(true) {
  if($input == "Clone them!") { break; }

  $arr = arrSequenceFinder($input);

  if($countWhileLoop == 0) {
    $bestDNA = $arr;
    $bestDNA_number = $countWhileLoop + 1;
    $countWhileLoop++;
  } else {

    if($arr[count($arr) - 3] > $bestDNA[count($bestDNA) - 3]) {
      $bestDNA = $arr;
      $bestDNA_number = $countWhileLoop;
    } else if ($arr[count($arr) - 3] == $bestDNA[count($bestDNA) - 3]) {

      if($arr[count($arr) - 2] < $bestDNA[count($bestDNA) - 2]) {
        $bestDNA = $arr;
        $bestDNA_number = $countWhileLoop;
      } else if ($arr[count($arr) - 2] == $bestDNA[count($bestDNA) - 2]) {

        if($arr[count($arr) - 1] > $bestDNA[count($bestDNA) - 1]) {
          $bestDNA = $arr;
          $bestDNA_number = $countWhileLoop;
        }

      }

    }

  }

  $countWhileLoop++;
  $input = readline();
}

echo "Best DNA sample " . $bestDNA_number . " with sum: " . $bestDNA[count($bestDNA) - 1] . "." . PHP_EOL;

for($i = 0; $i < count($bestDNA) - 3; $i++) {
  echo $bestDNA[$i] . " ";
}

function arrSequenceFinder($input) {

  //$arr = preg_split( "/(\?|\.|!)/", $input );
  $arr = preg_split( "/(!++)/", $input, -1, PREG_SPLIT_NO_EMPTY);
  //$arr = explode("!", $input);

  //var_dump($arr);

  $maxSeq = 0;      // $arr[count($arr) - 3]
  $maxSeqStart = 0; // $arr[count($arr) - 2]
  $sumElements = 0; // $arr[count($arr) - 1]

  $tempSeq = 0;
  $tempSeqStart = 0;

  for($i = 0; $i < count($arr) - 1; $i++) {

    //echo "Loop" . $i . PHP_EOL;
    //echo "is" . $arr[$i] . " = " . $arr[$i + 1] . PHP_EOL;

    // The line bellow excludes a given integer
    if(($arr[$i] == $arr[$i + 1]) && ($arr[$i] == 0 && $arr[$i + 1] == 0)) {
    
    } else if($arr[$i] == $arr[$i + 1]) {
      if ($tempSeq == 0) {$tempSeq = 1; }
      //echo "TempSeqStart = $tempSeqStart = $i - $tempSeq" . PHP_EOL;
      $tempSeqStart = $i - $tempSeq + 1;
      $tempSeq++;

      //echo "Yes it is" . PHP_EOL;
      //echo "tempSeq = $tempSeq" . PHP_EOL;
      //echo "tempSeqStart = $tempSeqStart" . PHP_EOL;

      if ($maxSeq < $tempSeq) {
        $maxSeq = $tempSeq;
        $maxSeqStart = $tempSeqStart;
      }

    } else {
      $tempSeq = 0;
    }

  }

  for($i = 0; $i < count($arr); $i++) {
    $arr[$i] = intval($arr[$i]);
  }

  for($i = 0; $i < count($arr); $i++) {
    $sumElements += intval($arr[$i]);
  }

  $arr[] += $maxSeq;
  $arr[] += $maxSeqStart;
  $arr[] += $sumElements;

  //echo $maxSeq . PHP_EOL;
  //echo $maxSeqStart . PHP_EOL;
  //echo $sumElements . PHP_EOL;
  //var_dump($arr);

  return $arr;

}

?>