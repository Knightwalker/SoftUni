<?php

$a = intval(readline());
$b = intval(readline());
$temp = 0;

echo "Before:" . PHP_EOL;
echo "a = $a" . PHP_EOL;
echo "b = $b" . PHP_EOL;

$temp = $a;
$a = $b;
$b = $temp;

echo "After:" . PHP_EOL;
echo "a = $a" . PHP_EOL;
echo "b = $b" . PHP_EOL;

?>