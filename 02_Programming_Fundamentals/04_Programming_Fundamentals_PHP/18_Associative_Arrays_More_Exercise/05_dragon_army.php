<?php


$n = readline();
$dragonList = [];

for($i = 0; $i < $n; $i++) {
  $inputArr = explode(" ", readline());  
  $dragonType = $inputArr[0];
  $dragonName = $inputArr[1];
  $dragonDamage = $inputArr[2];
  $dragonHealth = $inputArr[3];
  $dragonArmor = $inputArr[4];

  if (!key_exists($dragonType, $dragonList)) {
    $dragonList[$dragonType][$dragonName] = [];

    if ($dragonDamage != "null") {
      $dragonList[$dragonType][$dragonName]["damage"] = intval($dragonDamage);
    } else {
      $dragonList[$dragonType][$dragonName]["damage"] = 45;
    }

    if ($dragonHealth != "null") {
      $dragonList[$dragonType][$dragonName]["health"] = intval($dragonHealth);
    } else {
      $dragonList[$dragonType][$dragonName]["health"] = 250;
    }

    if ($dragonArmor != "null") {
      $dragonList[$dragonType][$dragonName]["armor"] = intval($dragonArmor);
    } else {
      $dragonList[$dragonType][$dragonName]["armor"] = 10;
    }

  } else {

    if (!key_exists($dragonName, $dragonList[$dragonType])) {
      $dragonList[$dragonType][$dragonName] = [];

      if ($dragonDamage != "null") {
        $dragonList[$dragonType][$dragonName]["damage"] = intval($dragonDamage);
      } else {
        $dragonList[$dragonType][$dragonName]["damage"] = 45;
      }

      if ($dragonHealth != "null") {
        $dragonList[$dragonType][$dragonName]["health"] = intval($dragonHealth);
      } else {
        $dragonList[$dragonType][$dragonName]["health"] = 250;
      }

      if ($dragonArmor != "null") {
        $dragonList[$dragonType][$dragonName]["armor"] = intval($dragonArmor);
      } else {
        $dragonList[$dragonType][$dragonName]["armor"] = 10;
      }

    } else {

      //var_dump($dragonList[$dragonType][$dragonName]);

      if ($dragonDamage != "null") {
        $dragonList[$dragonType][$dragonName]["damage"] = intval($dragonDamage);
      } else {
        $dragonList[$dragonType][$dragonName]["damage"] = 45;
      }

      if ($dragonHealth != "null") {
        $dragonList[$dragonType][$dragonName]["health"] = intval($dragonHealth);
      } else {
        $dragonList[$dragonType][$dragonName]["health"] = 250;
      }

      if ($dragonArmor != "null") {
        $dragonList[$dragonType][$dragonName]["armor"] = intval($dragonArmor);
      } else {
        $dragonList[$dragonType][$dragonName]["armor"] = 10;
      }
    
    }
  
  }

}

foreach ($dragonList as $dragType => $dragName) {
  //var_dump($dragName);
  $averageDamage = 0;
  $averageDamageCount = 0;
  $averageHealth = 0;
  $averageHealthCount = 0;
  $averageArmor = 0;
  $averageArmorCount = 0;
  foreach ($dragName as $dragon) {
    foreach ($dragon as $attribute => $value) {
      if ($attribute == "damage") {
        $averageDamage += $value;
        $averageDamageCount++;
      } else if ($attribute == "health") {
        $averageHealth += $value;
        $averageHealthCount++;
      } else if ($attribute == "armor") {
        $averageArmor += $value;
        $averageArmorCount++;
      }
    }
  }

  $averageDamage = number_format($averageDamage / $averageDamageCount, 2, ".","");
  $averageHealth = number_format($averageHealth / $averageHealthCount, 2, ".", "");
  $averageArmor = number_format($averageArmor / $averageArmorCount, 2, ".", "");
  echo "$dragType::($averageDamage/$averageHealth/$averageArmor)" . PHP_EOL;
  
  uksort($dragName, function ($a, $b) {
	  return strcmp($a, $b);
	});

  foreach($dragName as $dragKey => $dragValue) {
    echo "-$dragKey -> ";

    $temp = "";
    foreach ($dragValue as $dragAtrName => $dragAtrPoints) {
      $temp .= "$dragAtrName: $dragAtrPoints|";
    }
    $tempArr = explode("|", $temp);
    $tempArr = array_filter($tempArr);
    $newTemp = implode(", ", $tempArr);
    echo $newTemp;

    echo PHP_EOL;
  }
}

?>