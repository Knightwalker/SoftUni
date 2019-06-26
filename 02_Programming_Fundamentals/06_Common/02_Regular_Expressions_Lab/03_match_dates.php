<?php

$re = '/\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/m';
$str = readline();

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

foreach ($matches as $match) {
  echo "Day: " . $match["day"] . ", ";
  echo "Month: " . $match["month"] . ", ";
  echo "Year: " . $match["year"] . PHP_EOL;
}

?>