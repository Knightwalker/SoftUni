<?php
$dishesMatch = '/[<][a-z0-9]+[>]/m';
$houseMatch = '/[[][A-Z0-9]+[]]/m';
$laundryMatch = '/[{].+[}]/m';
$str = null;
$dishesTime = 0;
$houseTime=0;
$laundryTime = 0;
while (($str = readline()) != 'wife is happy') {
    if (preg_match($dishesMatch, $str, $matches)) {
        $m = $matches[0];
        for ($i = 0; $i < strlen($m); $i++) {
            if (is_numeric($m[$i])) {
                $dishesTime += intval($m[$i]);
            }
        }


    }
    if (preg_match($houseMatch, $str, $matches)) {
        $m = $matches[0];
        for ($i = 0; $i < strlen($m); $i++) {
            if (is_numeric($m[$i])) {
                $houseTime += intval($m[$i]);
            }
        }
    }
    if (preg_match($laundryMatch, $str, $matches)) {
        $m = $matches[0];
        for ($i = 0; $i < strlen($m); $i++) {
            if (is_numeric($m[$i])) {
                $laundryTime += intval($m[$i]);
            }
        }
    }
}
$totalTime = $dishesTime + $houseTime +$laundryTime;
echo "Doing the dishes - $dishesTime min." . PHP_EOL;
echo "Cleaning the house - $houseTime min." .PHP_EOL;
echo "Doing the laundry - $laundryTime min." .PHP_EOL;
echo "Total - $totalTime min.";