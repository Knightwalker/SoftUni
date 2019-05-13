<?php

$banList = explode(", ", readline());
$text = readline();

foreach ($banList as $banWord) {
  $placeholder = str_repeat("*", strlen($banWord));
  $text = str_replace($banWord, $placeholder, $text);
}

echo $text;

?>