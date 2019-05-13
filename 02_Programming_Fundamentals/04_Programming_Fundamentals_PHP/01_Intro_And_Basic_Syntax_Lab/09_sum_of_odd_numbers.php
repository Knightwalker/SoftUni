<?php

$n = readline();
$res = 0;
for ($i = 1; $i <= $n * 2; $i+=2)
{
    $res += $i;
    echo $i . PHP_EOL;
}

echo "Sum: $res";

?>