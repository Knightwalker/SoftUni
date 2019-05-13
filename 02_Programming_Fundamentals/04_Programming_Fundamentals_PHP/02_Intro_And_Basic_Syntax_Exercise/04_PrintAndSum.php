<?php 

$indexStart = intval(readline());
$indexEnd = intval(readline());
$res = 0; 

for ($i = $indexStart; $i <= $indexEnd; $i++) {
  echo $i . " ";
  $res += $i;
}

echo PHP_EOL;
echo "Sum: " . $res; 

?>