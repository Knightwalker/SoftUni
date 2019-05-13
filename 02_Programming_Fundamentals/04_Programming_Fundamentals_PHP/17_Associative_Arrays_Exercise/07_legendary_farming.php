<?php
$inputArr = "";
$materialsArr = [];
$junksArr = [];
$exit = false;
$winner = "";

while (true) {
  if ($exit == true) { break; }
  $inputArr = explode(" ", readline());

  for ($i = 0; $i < count($inputArr); $i+= 2) {
    $value = intval($inputArr[$i]);
    $material = strtolower($inputArr[$i + 1]);
 
    if ($material == "shards" || $material == "fragments" || $material == "motes") {
      if (!key_exists($material, $materialsArr)) {
        $materialsArr[$material] = 0;
      }
      $materialsArr[$material] += $value;
    } else {
      if (!key_exists($material, $junksArr)) {
        $junksArr[$material] = 0;
      }
      $junksArr[$material] += $value;
    }

    foreach ($materialsArr as $material => $value) {
      if ($value >= 250) {
        $winner = $material;
        break;
      }
    }
  
    if ($winner == "shards") {
      echo "Shadowmourne obtained!" . PHP_EOL;
      $exit = true;
      break;
    } else if ($winner == "fragments") {
      echo "Valanyr obtained!" . PHP_EOL;
      $exit = true;
      break;
    } else if ($winner == "motes") {
      echo "Dragonwrath obtained!" . PHP_EOL;
      $exit = true;
      break;
    }

  }

}

$materialsArr[$winner] -= 250;

// Add keys if not existing
if (!key_exists("shards", $materialsArr)) {
  $materialsArr["shards"] = 0;
}
if (!key_exists("fragments", $materialsArr)) {
  $materialsArr["fragments"] = 0;
}
if (!key_exists("motes", $materialsArr)) {
  $materialsArr["motes"] = 0;
}

//var_dump($materialsArr);
//var_dump($junksArr);
//arsort($materialsArr[$materials]);


function cmpInt($a, $b) {
    return ($a < $b) ? -1 : (($a > $b) ? 1 : 0);
}

uksort($materialsArr, function ($a, $b) use ($materialsArr) { 
    if ($materialsArr[$a] < $materialsArr[$b]) return 1;
    elseif ($materialsArr[$a] > $materialsArr[$b]) return -1; 
    elseif ($a < $b) return -1; 
    elseif ($a > $b) return 1; 
    else return 0; 
});

foreach ($materialsArr as $materials => $value) {
  echo $materials . ": " . $value . PHP_EOL;
}

ksort($junksArr);
foreach ($junksArr as $materials => $value) {
  echo $materials . ": " . $value . PHP_EOL;
}

?>