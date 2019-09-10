<?php

$questsArr = explode(", ", readline());  
$input = "";

while (true) {
  $input = readline();
  $commands = explode(" - ", $input);
  if ($commands[0] == "Retire!") { break; }
  $command = $commands[0];
  $quest =  $commands[1];
  
  //var_dump($questsArr);
  //var_dump($command);
  //var_dump($quest);

  if ($command == "Start") {
    if (in_array($quest, $questsArr) == false ) {
      $questsArr[] = $quest;
    }

  } else if ($command == "Complete") {
    if (in_array($quest, $questsArr) == true) {
      $index = array_search($quest, $questsArr);
      array_splice($questsArr, $index, 1);
    }

  } else if ($command == "Renew") {
    if (in_array($quest, $questsArr) == true) {
      $index = array_search($quest, $questsArr);
      $temp = $questsArr[$index];
      array_splice($questsArr, $index, 1);
      $questsArr[] = $temp;
    }

  } else if ($command == "Side Quest") {
    $mainQuest_sideQuest = explode(":", $quest);
    $mainQuest = $mainQuest_sideQuest[0];
    $sideQuest = $mainQuest_sideQuest[1];

    if (in_array($mainQuest, $questsArr) == true) {
      if (in_array($sideQuest, $questsArr) == false) {
        $index = array_search($mainQuest, $questsArr);
        $temp = $questsArr[$index];
        $index += 1;
        $questsArr = arrElementInsertAtAndReindex($questsArr, $sideQuest, $index);
      }
    }
  }

}

echo implode(", ", $questsArr);

// Inserts element at position and reindexes.
// Uses array_splice() function
function arrElementInsertAtAndReindex($arr, $num, $pos) {
  array_splice($arr, $pos, 0, $num);
  return $arr;
}

?>