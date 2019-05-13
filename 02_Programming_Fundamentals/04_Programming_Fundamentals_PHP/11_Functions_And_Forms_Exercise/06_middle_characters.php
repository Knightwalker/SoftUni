<?php

$input = readline();

if (strlen($input) % 2 == 0) {
  $mid1 = (strlen($input) / 2) - 1;
  $mid2 = strlen($input) / 2;
  echo $input[$mid1] . $input[$mid2];
} else {
  $mid = (strlen($input) + 1) / 2;
  $mid -= 1;
  echo $input[$mid];
}

?>