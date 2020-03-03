<?php

$firstNumber = floatval(readline());
$secondNumber = floatval(readline());
$sum = $firstNumber + $secondNumber;
$res = number_format($sum, 2, '.', '');

echo "\$firstNumber + \$secondNumber = $firstNumber + $secondNumber = $res";

?>