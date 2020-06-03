<?php

$wordsArr = explode(" ", strtolower(readline()));
$assocArr = [];

for ($i = 0; $i < count($wordsArr); $i++) {
  if (!array_key_exists($wordsArr[$i], $assocArr)) {
    $assocArr[$wordsArr[$i]] = 0;
  }
  $assocArr[$wordsArr[$i]]++;
}

$newAssocArray = array_filter($assocArr, function($n) {
  return intval($n) % 2 == 1;
});

print(implode(", ", array_keys($newAssocArray)));