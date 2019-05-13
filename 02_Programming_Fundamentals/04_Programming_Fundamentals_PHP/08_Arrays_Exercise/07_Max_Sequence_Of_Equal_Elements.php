<?php

$arr = explode(" ", readline());
$seq = 1;
$seqStart = 0;

$maxSeq = -999;
$maxSeqStart = -999;

for($i = 0; $i < count($arr) - 1; $i++) {

  if ($arr[$i] == $arr[$i + 1]) {
    $seq++;
  } 

  if ($maxSeq < $seq) {
    $maxSeq = $seq;
    $maxSeqStart = $seqStart;
  }

  if ($arr[$i] != $arr[$i + 1]) {
    $seq = 1;
    $seqStart = $i + 1;
  }

}

for ($i = 0; $i < $maxSeq; $i++) {
  echo $arr[$maxSeqStart + $i] . " ";
} 

?>