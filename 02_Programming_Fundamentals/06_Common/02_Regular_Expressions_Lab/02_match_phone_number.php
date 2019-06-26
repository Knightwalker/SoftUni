<?php

$re = '/(([+]359)( )(2)( )\d{3}( )\d{4}\b)|(([+]359)(-)(2)(-)\d{3}(-)\d{4}\b)/m';
$str = readline();

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

$listOfPhones = [];
// Print the entire match result
foreach ($matches as $phone) {
  $listOfPhones[] = $phone[0];
}

echo implode(", ", $listOfPhones);

?>