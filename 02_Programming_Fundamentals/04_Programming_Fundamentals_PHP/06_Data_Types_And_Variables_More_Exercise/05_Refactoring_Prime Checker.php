<?php

$n = intval(readline());

for ($i = 2; $i <= $n; $i++) {
  if (is_prime($i) == true) {
    echo "$i -> true" . PHP_EOL;
  } else {
    echo "$i -> false" . PHP_EOL;
  }
}

function is_prime($n){for($i=$n**.5|1;$i&&$n%$i--;);return!$i&&$n>1;}

?>