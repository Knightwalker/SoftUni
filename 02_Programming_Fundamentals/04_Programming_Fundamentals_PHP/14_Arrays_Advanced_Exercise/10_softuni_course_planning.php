<?php

$coursesArr = explode(", ", readline());
$commands = [];

while (true) {
  $commands = explode(":", readline());
  if ($commands[0] == "course start") { break; }
  $command = $commands[0];

  if ($command == "Add") {
    $lesson = $commands[1];

    if (in_array($lesson, $coursesArr) == false) {
      $coursesArr[] = $lesson;
    }

  } else if ($command == "Insert") {
    $lesson = $commands[1];
    $index = $commands[2];

    if (in_array($lesson, $coursesArr) == false) {
      $coursesArr = arrElementInsertAtAndReindex($coursesArr, $lesson, $index);
    }

  } else if ($command == "Remove") {
    $lesson = $commands[1];
    $exerciseFollowing = $lesson . "-Exercise";

    if (in_array($lesson, $coursesArr) == true) {
      $index = array_search($lesson, $coursesArr);
      array_splice($coursesArr, $index, 1);

      for ($i = 0; $i < count($coursesArr); $i++) {
        if ($coursesArr[$i] == $exerciseFollowing) {
          array_splice($coursesArr, $i, 1);
          $i--;
        }
      }
    
    }

  } else if ($command == "Swap") {
    $lessonOne = $commands[1];
    $lessonTwo = $commands[2];
    $exerciseOne = $lessonOne . "-Exercise";
    $exerciseTwo = $lessonTwo . "-Exercise";
    $tempLesson = "";

    if (in_array($lessonOne, $coursesArr) == true) {
      if (in_array($lessonTwo, $coursesArr) == true) {
        $indexOne = array_search($lessonOne, $coursesArr);
        $indexTwo = array_search($lessonTwo, $coursesArr);
        
        $tempLesson = $coursesArr[$indexOne];
        $coursesArr[$indexOne] = $coursesArr[$indexTwo];
        $coursesArr[$indexTwo] = $tempLesson;

        //check exercises
        if (in_array($exerciseOne, $coursesArr) == true) {
          $coursesArr = arrElementRemoveAndReindex($coursesArr, $exerciseOne);
          $coursesArr = arrElementInsertAtAndReindex($coursesArr, $exerciseOne, $indexTwo + 1);
        }
        if (in_array($exerciseTwo, $coursesArr) == true) {
          $coursesArr = arrElementRemoveAndReindex($coursesArr, $exerciseTwo);
          $coursesArr = arrElementInsertAtAndReindex($coursesArr, $exerciseTwo, $indexOne + 1);
        }

      }     
    }

  } else if ($command == "Exercise") {
    $lesson = $commands[1];
    $lessonExercise = $lesson . "-Exercise";

    if ((in_array($lesson, $coursesArr) == true) && ((in_array($lessonExercise, $coursesArr) == false))) {
      $index = array_search($lesson, $coursesArr);
      $coursesArr = arrElementInsertAtAndReindex($coursesArr, $lessonExercise, $index + 1);
    } else if (in_array($lesson, $coursesArr) == false) {
      $coursesArr[] = $lesson;
      $coursesArr[] = $lessonExercise;
    }

  }

} 

foreach ($coursesArr as $key => $value) {
  echo $key + 1 . "." . $value . PHP_EOL;
}


// Inserts element at position and reindexes.
// Uses array_splice() function
function arrElementInsertAtAndReindex($arr, $num, $pos) {
  array_splice($arr, $pos, 0, $num);
  return $arr;
}

// Deletes element and reindexes.
// Uses array_splice() function.
function arrElementRemoveAndReindex($arr, $num) {
  for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $num) {
      array_splice($arr, $i, 1);
      $i--;
    }
  }
  return $arr;
}

?>