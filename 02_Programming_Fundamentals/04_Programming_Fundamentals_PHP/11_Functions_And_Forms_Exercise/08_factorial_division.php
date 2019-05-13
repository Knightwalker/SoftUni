<?php

$n1 = readline();
$n2 = readline();

$n1 = factorial($n1);
$n2 = factorial($n2);

$res = $n1 / $n2;
echo number_format($res, 2, '.', '');

function factorial($n) {
	$res = 1.0;

  for ($i = $n; $i >= 1; $i--) 
  {
    $res *= $i;
  }
  
  return $res;
}

?>