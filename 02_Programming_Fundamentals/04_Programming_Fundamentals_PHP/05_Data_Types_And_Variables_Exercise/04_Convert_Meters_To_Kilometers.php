<?php 

$meters = intval(readline());
$kilometers = $meters / 1000;

echo number_format($kilometers, 2, '.', '');

?>