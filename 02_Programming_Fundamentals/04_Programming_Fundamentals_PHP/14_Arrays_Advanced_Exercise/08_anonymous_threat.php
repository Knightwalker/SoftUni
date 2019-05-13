<?php
 
$inputArr = explode(" ", readline());
$line = readline();
 
$startIndex = -1000;
$endIndex = -1000;
 
while (true) {
    if ($line == "3:1") {
        break;
    }
    $tokens = explode(" ", $line);
    $command = $tokens[0];
    $startIndex = intval($tokens[1]);
    $endIndex = intval($tokens[2]);
    $concatWord = "";
 
    if ($startIndex < 0 || $startIndex > count($inputArr)) {
        $startIndex = 0;
    }
    if ($endIndex > count($inputArr) - 1 || $endIndex < 0) {
        $endIndex = count($inputArr) - 1;
    }
 
    switch ($command) {
        case "merge":
            for ($i = $startIndex; $i <= $endIndex; $i++) {
                $concatWord .= $inputArr[$i];
            }
            array_splice($inputArr, $startIndex, $endIndex - $startIndex + 1);
            array_splice($inputArr, $startIndex, 0, $concatWord);
            break;
        case "divide":
            $index = intval($tokens[1]);
            $partitions = intval($tokens[2]);
            $arr = [];
            $current = $inputArr[$index];
            $length = strlen($inputArr[$index]);
            $chunk = floor($length / $partitions);
 
            if ($length % $partitions == 0) {
                $arr = str_split($current, $chunk);
            } else {
                $lastPartsLength = $chunk + $length % $partitions;
                $lastPart = substr($current, (-$lastPartsLength));
                $current = substr_replace($current, "", (-$lastPartsLength));
                $arr = str_split($current, $chunk);
                $arr[] = $lastPart;
            }
 
            array_splice($inputArr, $index, 1);
            array_splice($inputArr, $index, 0, $arr);
            break;
    }
 
    $line = readline();
}
echo implode(" ", $inputArr);