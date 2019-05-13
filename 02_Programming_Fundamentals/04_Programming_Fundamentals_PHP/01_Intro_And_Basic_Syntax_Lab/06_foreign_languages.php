<?php

$input = readline();

if ($input == "England" || $input == "USA") {
  echo "English";
} else if ($input == "Spain" || $input == "Argentina" || $input == "Mexico") {
  echo "Spanish";
} else {
  echo "unknown";
}

?>