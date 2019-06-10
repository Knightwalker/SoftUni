<?php 

$input = readline();

$arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if ($input <= 12) { echo $arr[$input - 1]; }
else { echo "Invalid Month!"; }

?>