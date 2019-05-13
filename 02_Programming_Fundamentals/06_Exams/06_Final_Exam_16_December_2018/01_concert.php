<?php

class Band {
  private $name;
  private $members = [];

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function getMembers() {
    return $this->members;
  }

  public function setMembers($member) {
    
  }

}

$bandList = [];
$totalTime = 0;

while (true) {
  $input = readline();
  if ($input == "start of concert") { break; }
  $mode = "";

  $inputArr = explode("; ", $input);
  if ($inputArr[0] == "Add") { 
    $mode = "add"; 
  } else if ($inputArr[0] == "Play") {
    $mode = "play";
  }

  //var_dump($inputArr);

  if ($mode == "add") {
    $bandName = $inputArr[1];
    $membersArr = explode(", ", $inputArr[2]);
    $membersList = [];
    for ($i = 1; $i < count($membersArr); $i++) {
      $membersList[] = $membersArr[$i];
    }

    if (!key_exists($bandName, $bandList)) {
      $bandList[$bandName] = [];
      $bandList[$bandName]["members"] = [];
      $bandList[$bandName]["stageTime"] = 0;
    }
    foreach ($membersArr as $newMembers) {
      $memberExists = false;
      foreach ($bandList[$bandName]["members"] as $existingMembers) {
        if ($existingMembers == $newMembers) {
          $memberExists = true;
        }
      }

      if ($memberExists == false) {
        $bandList[$bandName]["members"][] = $newMembers;
      }
      
    }
    
    // var_dump($bandList);

  // END add mode  
  } else if ($mode == "play") {
    $bandName = $inputArr[1];
    $bandPlays = $inputArr[2];

    if (!key_exists($bandName, $bandList)) {
      $bandList[$bandName] = [];
      $bandList[$bandName]["members"] = [];
      $bandList[$bandName]["stageTime"] = 0;
    }
    $bandList[$bandName]["stageTime"] += intval($bandPlays);
    $totalTime += intval($bandPlays);
  
  // END play mode
  }

}

// Sort by total time played in DESC, then by name;

//var_dump($bandList);

uksort($bandList, function($a, $b) use ($bandList) { 
   
    //var_dump($bandList[$a]["stageTime"]);
    //var_dump($a);

    if ($bandList[$a]["stageTime"] < $bandList[$b]["stageTime"]) return 1;
    elseif ($bandList[$a]["stageTime"] > $bandList[$b]["stageTime"]) return -1; 
    else return strcmp($a, $b); 
    
});

$bandOutput = readline();

// Output
echo "Total time: " . $totalTime . PHP_EOL;
foreach ($bandList as $key => $val) {
  echo $key . " -> " . $val["stageTime"] . PHP_EOL;
} 

echo $bandOutput . PHP_EOL;
foreach ($bandList as $key => $val) {
  
  if ($key == $bandOutput) {
    foreach ($val["members"] as $vmem) {
      echo "=> " . $vmem . PHP_EOL;
    } 
  }
  
} 

//var_dump($bandList);
  
?>