<?php

$input = readline();
if(isPalindrome($input) == true) {
  echo "true";
} else {
  echo "false";
}

// Checks a string for symmetry 
// abccba -> true
// xyz -> false
function isPalindrome($str) {

  $strLen = strlen($str);
  for ($i = 0; $i < floor($strLen / 2); $i++) {
    if ($str[$i] != $str[$strLen - 1 - $i]) {
      return false;
    }
  }
  return true;

}