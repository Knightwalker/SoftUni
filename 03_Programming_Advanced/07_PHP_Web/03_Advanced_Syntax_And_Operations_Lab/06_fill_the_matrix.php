<?php 

$str = readline();
$arr = preg_split('/\s*,\s*/', trim($str));

$n = $arr[0];
$pattern = $arr[1];
$matrix = [];
$counter = 0;
$incrementor = 0;
$res = "";

if ($pattern == "A") {
  for ($i = 1; $i <= $n * $n; $i++) {
    $matrix[] = $i;
  }

  for ($rows = 0; $rows < $n; $rows++) {
    for ($cols = 0; $cols < $n; $cols++) {
      $res .= $matrix[$counter + $incrementor] . " ";
      $counter += $n;
    }
    $counter = 0;
    $incrementor++;
    $res .= PHP_EOL;
  }

  echo $res;

} else if ($pattern == "B") {
  $counter = 1;

  for ($r = 0; $r < $n; $r++) {
    $matrix[$r] = [];

    if ($r % 2 == 0) {
      for ($c = 0; $c < $n; $c++) {
        $matrix[$r][$c] = $counter++;
      }
    } else {
      for ($c = $n - 1; $c >= 0; $c--) {
        $matrix[$r][$c] = $counter++;
      }
    }
  }

}

for ($i = 0; $i < $n; $i++) {
  for ($j = 0; $j < $n; $j++) {
    echo $matrix[$j][$i] . " ";
  }
  echo PHP_EOL;
}

?>
