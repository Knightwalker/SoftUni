<?php

$n = readline();
$res = [];

for ($i = 0; $i < $n * 2; $i+=2) {
  $word = readline();
  $synonym = readline();

  if (!key_exists($word, $res)) {
    $res[$word] = [];
  }
  $res[$word][] = $synonym;
}

uksort($res, function ($key1, $key2) use($res) {
  $countSynonyms1 = count($res[$key1]);
  $countSynonyms2 = count($res[$key2]);
  if ($countSynonyms1 == $countSynonyms2) {
    return $key1 <=> $key2;
  }
  return $countSynonyms2 <=> $countSynonyms1;
});

foreach ($res as $words => $word) {
  echo $words . " - ";
  echo implode(", ", $word);
  echo PHP_EOL;
}

?>