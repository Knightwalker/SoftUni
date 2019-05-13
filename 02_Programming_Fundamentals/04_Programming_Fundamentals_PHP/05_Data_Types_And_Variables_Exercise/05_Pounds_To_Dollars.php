<?php 

$GBP = floatval(readline());
$USD = $GBP * 1.31;

echo number_format($USD, 3, '.', '');

?>