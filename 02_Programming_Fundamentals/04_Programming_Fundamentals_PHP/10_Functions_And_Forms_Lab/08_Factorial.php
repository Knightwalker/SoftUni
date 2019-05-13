<?php

$n = readline();
$res = factiorial($n);
echo $res;

function factiorial($n) {
	$res = 1.0;

  for ($i = $n; $i >= 1; $i--) 
  {
    $res *= $i;
  }
  
  return $res;
}

?>