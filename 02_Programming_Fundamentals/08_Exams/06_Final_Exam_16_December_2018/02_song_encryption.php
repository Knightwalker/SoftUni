<?php

while(true) {
  $input = readline();
  if ($input == "end") { break; }

  $inputArr = explode(":", $input);
  $artist = $inputArr[0];
  $song = $inputArr[1];

  $validateArtist = true;
  $validateSong = true;
  if (ctype_upper($artist[0]) == false) {
    $validateArtist = false;
  }
  for($i = 1; $i < strlen($artist); $i++) {
    if (ctype_lower($artist[$i]) == false) {
      if (!($artist[$i] == "'" || $artist[$i] == " ")) {
        $validateArtist = false;
      }
    }
  }

  for($i = 0; $i < strlen($song); $i++) {
    if (ctype_upper($song[$i]) == false) {
      if (!($song[$i] == " ")) {
        $validateSong = false;
      }
    }
  }

  if ($validateArtist == true && $validateSong == true) {
    $encryptedArtist = "";
    $encryptedSong = "";
    $incrementArtist = strlen($artist);
    $incrementSong = strlen($artist);

    //var_dump($incrementArtist);

    //echo $artist . " " . $song . PHP_EOL;

    for($j = 0; $j < strlen($artist); $j++) {
      // do not ecrypt whitespaces or aposthropes
      if ($artist[$j] == "'" || $artist[$j] == " ") {
        $encryptedArtist .= $artist[$j];
      } else {
        $currentDigit = ord($artist[$j]);
        //var_dump($currentDigit);

        for ($x = 0; $x < $incrementArtist; $x++) {
          if (ctype_upper($artist[$j]) == true) {
            if ($currentDigit >= 90) {
              $currentDigit = 64;
            }
          $currentDigit += 1;  
          }

          else if (ctype_lower($artist[$j]) == true) {
            if ($currentDigit >= 122) {
              $currentDigit = 96;
            }
          $currentDigit += 1;  
          }
        }
 
        $encryptedArtist .= chr($currentDigit);
      }
      
    }

    for($j = 0; $j < strlen($song); $j++) {
      // do not ecrypt whitespaces or aposthropes
      if ($song[$j] == "'" || $song[$j] == " ") {
        $encryptedSong .= $song[$j];
      } else {
        $currentDigit = ord($song[$j]);
        //var_dump($currentDigit);

        for ($x = 0; $x < $incrementSong; $x++) {
          if (ctype_upper($song[$j]) == true) {
            if ($currentDigit >= 90) {
              $currentDigit = 64;
            }
          $currentDigit += 1;  
          }

          else if (ctype_lower($song[$j]) == true) {
            if ($currentDigit >= 122) {
              $currentDigit = 96;
            }
          $currentDigit += 1;  
          }
        }

        //echo "To" . $currentDigit . PHP_EOL;
 
        $encryptedSong .= chr($currentDigit);
      }
      
    }

    echo "Successful encryption: " . $encryptedArtist . "@" . $encryptedSong . PHP_EOL;

  } else {
    echo "Invalid input!" . PHP_EOL;
  }

}

?>