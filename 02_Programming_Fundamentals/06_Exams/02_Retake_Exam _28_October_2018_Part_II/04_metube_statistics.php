<?php

$stats = [];

while (true) {
  $input = readline();
  if ($input == "stats time") { break; }
  
  $mode = "";
  $inputArr = explode(":", $input);

  //var_dump($inputArr);
  if ($inputArr[0] == "like" || $inputArr[0] == "dislike") {
    $mode = "rateVideo";
  } else {
    $inputArr = explode("-", $input);
    if (count($inputArr) > 1) {
      $mode = "addVideo";
    } else {
      continue;
    }
  }

  if ($mode == "addVideo") {
    $videoName = $inputArr[0];
    $videoViews = $inputArr[1]; 

    if (!key_exists($videoName, $stats)) {
      $stats[$videoName] = [];
      $stats[$videoName]["views"] = 0;
      $stats[$videoName]["likes"] = 0;
    }
    $stats[$videoName]["views"] += intval($videoViews);

  } else if ($mode == "rateVideo") {
    $rateMode = $inputArr[0];
    $videoName = $inputArr[1];

    if (key_exists($videoName, $stats)) {
      if ($rateMode == "like") {
        $stats[$videoName]["likes"] += 1;
      } else if ($rateMode == "dislike") {
        $stats[$videoName]["likes"] -= 1;
      }
      
    }
  }

}

//var_dump($stats);

// Sorting the array
$order = readline();
if ($order == "by likes") {

  uasort($stats, function($a, $b) {
    
    if ($a["likes"] < $b["likes"]) {
      return 1;
    } else if ($a["likes"] < $b["likes"]) {
      return -1;
    } else {
      return 0;
    }
    
  });

} else if ($order == "by views") {

  uasort($stats, function($a, $b) {
    
    if ($a["views"] < $b["views"]) {
      return 1;
    } else if ($a["views"] < $b["views"]) {
      return -1;
    } else {
      return 0;
    }
    
  });

}

// Output
foreach ($stats as $key => $value) {
  echo "$key";
  foreach ($value as $k => $v) {
    echo " - $v $k";
  }
  echo PHP_EOL;
}

?>