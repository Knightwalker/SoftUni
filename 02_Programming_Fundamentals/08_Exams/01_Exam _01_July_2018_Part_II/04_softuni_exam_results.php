<?php

$examList = [];
$submissionsList = [];

while (true) {
  $input = readline();
  if ($input == "exam finished") { break; }
  $mode = "normal";

  $inputArr = explode("-", $input);
  if ($inputArr[1] == "banned") {
    $mode = "banned";
  }

  if ($mode == "normal") {
    $name = $inputArr[0];
    $language = $inputArr[1];
    $points = $inputArr[2];

    // Storing the user in the examList
    if (!key_exists($name, $examList)) {
      $examList[$name] = 0;
    }
    // Keeping the better result in the examList
    if ($examList[$name] < $points) {
      $examList[$name] = $points;
    }

    // Storing the total submissions for each language
    if (!key_exists($language, $submissionsList)) {
      $submissionsList[$language] = 0;
    }
    $submissionsList[$language] += 1;

  } else if ($mode == "banned") {
    $name = $inputArr[0];
    unset($examList[$name]);
  }

}

// Sorting the examList by participants, ordered descending by their max points, then by username.
uksort($examList, function($a, $b) use ($examList) {
  if ($examList[$a] < $examList[$b]) {
    return 1;
  } else if ($examList[$a] > $examList[$b]) {
    return -1;
  } else {
    return strcmp($a, $b);  
  }
});

// Sorting the submissionsList by language, ordered descending by total submissions, then by username.
uksort($submissionsList, function($a, $b) use ($submissionsList) {
  if ($submissionsList[$a] < $submissionsList[$b]) {
    return 1;
  } else if ($submissionsList[$a] > $submissionsList[$b]) {
    return -1;
  } else {
    return strcmp($a, $b);  
  }
});

// Output
echo "Results:" . PHP_EOL;
foreach ($examList as $user => $points) {
  echo "$user | $points" . PHP_EOL;
}

echo "Submissions:" . PHP_EOL;
foreach ($submissionsList as $language => $submissions) {
  echo "$language - $submissions" . PHP_EOL;
}

?>