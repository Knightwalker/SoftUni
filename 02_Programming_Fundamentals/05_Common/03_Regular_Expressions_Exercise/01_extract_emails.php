<?php

$re = '/(^|(?<=\s))(?<user>([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+))(@)(?<host>[a-zA-Z]+([\.\-_][A-Za-z]+)+)/m';
$str = readline();

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

foreach ($matches as $match) {
  echo $match[0] . PHP_EOL;
}

?>