<?php

$re = '/(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))/m';
$str = readline();

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

foreach ($matches as $match) {
  echo $match[0] . " ";
}

?>