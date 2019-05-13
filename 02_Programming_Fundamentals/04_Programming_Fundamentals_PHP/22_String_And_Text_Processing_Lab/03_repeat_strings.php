<?php

$input = explode(" ", readline());
$res = "";

foreach ($input as $word) {
  $currentWord = str_repeat($word, strlen($word));
  $res .= $currentWord;
}

echo $res;

?>