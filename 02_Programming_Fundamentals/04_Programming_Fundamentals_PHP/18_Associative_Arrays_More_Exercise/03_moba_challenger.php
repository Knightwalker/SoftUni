<?php

$league = [];

while (true) {
  $inputMode = "default";
  $input = readline();
  if ($input == "") { continue; }
  if ($input == "Season end") { break; }

  if (strpos($input, 'vs') !== false) {
    $inputMode = "pvp";
  }

  if ($inputMode == "default") {
    $inputArr = explode(" -> ", $input);
    $playerName = $inputArr[0];
    $playerRole = $inputArr[1];
    $playerSkill = $inputArr[2];

    // If player does not exists -> Add the player, the role and the skill
    if (!key_exists($playerName, $league)) {
      $league[$playerName][$playerRole] = $playerSkill;

    // If the player exists, but the role does not -> Add the role and the skill
    } else {
      $roleExists = false;
      foreach ($league as $player => $roles) {     
        if ($playerName == $player) {
          if (!key_exists($playerRole, $roles)) {
            $league[$playerName][$playerRole] = $playerSkill;  
          } else {
            $roleExists = true;          
          }          
        }
      }

    // If the player and the role exists -> Add the role and the skill
      if ($roleExists == true) {
        if ($league[$playerName][$playerRole] < $playerSkill) {
          $league[$playerName][$playerRole] = $playerSkill;
        }
      }

    }

    //var_dump($league); 

  } else if ($inputMode == "pvp") {
    $inputPVP = explode(" ", $input);
    $playerOneName = $inputPVP[0];
    $playerTwoName = $inputPVP[2];

    $playerOne = false;
    $playerTwo = false;

    foreach ($league as $player => $roles) {     
      if ($playerOneName == $player) {
        $playerOne = true;         
      }
    }
    foreach ($league as $player => $roles) {     
      if ($playerOneName == $player) {
        $playerTwo = true;         
      }
    }

    if ($playerOne == true && $playerTwo == true) {
      foreach ($league as $playerOne => $rolesOne) {     
        if ($playerOne == $playerOneName) {
          //var_dump($rolesOne);

          foreach ($league as $playerTwo => $rolesTwo) {
            if ($playerTwo == $playerTwoName) {
              //var_dump($rolesTwo);

              // if two players have the same roles - duel them
              foreach ($rolesOne as $keyOne => $roleOne) {
                foreach ($rolesTwo as $keyTwo => $roleTwo) {

                  if ($keyOne == $keyTwo) {
                    
                    // remove the player with better bad score
                    if ($league[$playerOne][$keyOne] < $league[$playerTwo][$keyTwo]) {
                      unset($league[$playerOne][$keyOne]);
                    } else if ($league[$playerOne][$keyOne] > $league[$playerTwo][$keyTwo]) {
                      unset($league[$playerTwo][$keyTwo]);
                    }

                  }

                }
              }

            }
          }
        
        }
      }
    }
    

  }

}

// output

//echo "BEFORE SORT" . PHP_EOL;
//var_dump($league); 

uksort($league, function ($a, $b) {
  return strcmp($a, $b);
});

uasort($league, function($a, $b) {
  $a_total = 0;
  $b_total = 0;

  foreach ($a as $a_value) {
    $a_total += $a_value;
  }

  foreach ($b as $b_value) {
    $b_total += $b_value;
  }

  if ($a_total > $b_total) {
    return -1;
  } else if ($a_total < $b_total) {
    return 1;
  } else {
    return 0;
  }

});

foreach ($league as $key => $value) {
  $playerNameFinal = $key;
  $playerSkillFinal = 0;

  foreach ($value as $points) {
    $playerSkillFinal += $points;
  }

  if ($playerSkillFinal > 0) {
    echo "$playerNameFinal: $playerSkillFinal skill" . PHP_EOL;  
  
    // Sort values by points => DESC and then by name => ASC
    uksort($value, function ($a, $b) use ($value) { 
        if ($value[$a] < $value[$b]) return 1;
        elseif ($value[$a] > $value[$b]) return -1; 
        else return strcmp($a, $b); 
    });

    foreach ($value as $k => $v) {
      echo "- $k <::> $v" . PHP_EOL;
    }

  }

}

//echo "AFTER SORT" . PHP_EOL;
//var_dump($league); 

?>