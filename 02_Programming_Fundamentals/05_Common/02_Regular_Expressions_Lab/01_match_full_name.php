<?php

$re = '/\b[A-Z][a-z]+ [A-Z][a-z]+\b/m';
$str = readline();

preg_match_all($re, $str, $matches);

// Print the entire match result
foreach ($matches as $name) {
  echo implode (" ", $name) . " "; 
}

?>