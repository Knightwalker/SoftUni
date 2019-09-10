<?php

$total = 0;
while (1) {
    $input = readline();
    if ('end of shift' === $input) {

        break;
    }

    $pattern = '/.*%(?<name>[A-Z][a-z]+)%.*<(?<prod>\w+)>.*\|(?<count>[0-9]+)\|.*?(?<price>[0-9]+\.?[0-9]+)\$$/';
    if (preg_match($pattern, $input, $matches)) {
        $total += $matches['count'] * $matches['price'];
        printf("%s: %s - %.2f\n", $matches['name'], $matches['prod'], $matches['count'] * $matches['price']);
    }
}
printf("Total income: %.2f",$total);