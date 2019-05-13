<?php

$input = "";
$resultsList = [];
$submissionsList = [];

while (true) {
  $input = readline();
  if ($input == "exam finished") { break; }
  $inputArr = explode("-", $input);

  if ($inputArr[1] != "banned") {
    $user = $inputArr[0];
    $language = $inputArr[1];
    $points = intval($inputArr[2]);

    if (!key_exists($user, $resultsList)) {
      $resultsList[$user] = $points;
    } else {
      if ($resultsList[$user] < $points) {
        $resultsList[$user] = $points;
      }
    }

    if (!key_exists($language, $submissionsList)) {
      $submissionsList[$language] = 0;
    }
    $submissionsList[$language] += 1;

  } else {
    $user = $inputArr[0];
    unset($resultsList[$user]);

  }

}

uksort($resultsList, function ($a, $b) use ($resultsList) { 
    if ($resultsList[$a] < $resultsList[$b]) return 1;
    elseif ($resultsList[$a] > $resultsList[$b]) return -1; 
    else return strcmp($a, $b); 
});

echo "Results: " . PHP_EOL;
foreach ($resultsList as $users => $points) {
  echo $users . " | " . $points . PHP_EOL;
}

uksort($submissionsList, function ($a, $b) use ($submissionsList) { 
    if ($submissionsList[$a] < $submissionsList[$b]) return 1;
    elseif ($submissionsList[$a] > $submissionsList[$b]) return -1; 
    else return strcmp($a, $b); 
});

echo "Submissions: " . PHP_EOL;
foreach ($submissionsList as $languages => $count) {
  echo $languages . " - " . $count . PHP_EOL;
}

?>