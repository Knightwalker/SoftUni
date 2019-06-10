<?php 

$str = readline();
$arr =  explode(" ", $str);

for ($i = 0; $i < count($arr); $i++) {
  $res = floatval($arr[$i]);
  echo $arr[$i] . " => " . round($res, 0, PHP_ROUND_HALF_UP) . PHP_EOL;
}

?>