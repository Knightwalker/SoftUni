<?php

$n = intval(readline());
$multiplier = intval(readline());

$validate_multiplier = $multiplier >= 0 && $multiplier <= 10;

if ($validate_multiplier) {
    for ($i = $multiplier; $i <= 10; $i++)
    {
        $res = $n * $i;
        echo "$n X $i = $res" . PHP_EOL;
    }
} else if (!$validate_multiplier) {
    $res = $n * $multiplier;
    echo "$n X $multiplier = $res";
}

?>