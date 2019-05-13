<?php

$input = readline();
$strRev = "";
for ($i = strlen($input) - 1; $i >= 0; $i--) {
  $strRev .= $input[$i] . "";
}

echo $strRev;

?>