<?php

class Dwarf
{
  private $name;
  private $hatColor;
  private $physics;
  private $count;

  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function getHat() {
    return $this->hatColor;
  }

  public function setHat($hatColor) {
    $this->hatColor = $hatColor;
  }

  public function getPhysics() {
    return $this->physics;
  }

  public function setPhysics($physics) {
    $this->physics = $physics;
  }

  public function getCount() {
    return $this->count;
  }

  public function setCount($count) {
    $this->count += $count;
  }

}

$dwarfList = [];
$hatsList = [];

while (true) {
  $input = readline();
  if ($input == "") { continue; }
  if ($input == "Once upon a time") { break; }
  $inputArr = explode(" <:> ", $input);
  $dwarfName = $inputArr[0];
  $dwarfHatColor = $inputArr[1];
  $dwarfPhysics = $inputArr[2];

  $dwarfExists = false;
  $dwarfHatExists = false;
  foreach ($dwarfList as $values) {
    $currentDwarfName = $values->getName();
    $currentDwarfHat = $values->getHat();
    
    if ($currentDwarfName == $dwarfName) {
      $dwarfExists = true;

      if ($currentDwarfHat == $dwarfHatColor) {
        $dwarfHatExists = true;
      }

      break;
    }

  }

  if ($dwarfExists == false) {
    $dwarf = new Dwarf($dwarfName);
    $dwarf->setHat($dwarfHatColor);
    $dwarf->setPhysics($dwarfPhysics);
    $dwarfList[] = $dwarf;
    
    if (!key_exists($dwarfHatColor, $hatsList)) {
      $hatsList[$dwarfHatColor] = 0;
    }
    $hatsList[$dwarfHatColor] += 1;

  } else if ($dwarfExists == true) {
    
    if ($dwarfHatExists == false) {
      $dwarf = new Dwarf($dwarfName);
      $dwarf->setHat($dwarfHatColor);
      $dwarf->setPhysics($dwarfPhysics);
      $dwarfList[] = $dwarf;

      if (!key_exists($dwarfHatColor, $hatsList)) {
        $hatsList[$dwarfHatColor] = 0;
      }
      $hatsList[$dwarfHatColor] += 1;

    } else {

      foreach ($dwarfList as $values) {
        $currentDwarfName = $values->getName();
        $currentDwarfHat = $values->getHat(); 
        $currentDwarfPhysics = $values->getPhysics(); 

        if ($currentDwarfName == $dwarfName) {
          if ($currentDwarfHat == $dwarfHatColor) {
            
            if ($currentDwarfPhysics < $dwarfPhysics) {
              $values->setPhysics($dwarfPhysics);
              break;
            }

          }
        }

      }

    }
    
  }

} // END while-loop

foreach ($dwarfList as $dwarfs) {
  $dwarfsHatColor = $dwarfs->getHat();

  foreach ($hatsList as $colors => $color_values) {
    if ($dwarfsHatColor == $colors) {
      $dwarfs->setCount($color_values);
    }
  }

}

// Sorting
usort($dwarfList, function($a, $b) {
  $sortingPhysicsA = $a->getPhysics();
  $sortingPhysicsB = $b->getPhysics();
  $sortingCountA = $a->getCount();
  $sortingCountB = $b->getCount();

  if ($sortingPhysicsA < $sortingPhysicsB) {
    return 1;
  } else if ($sortingPhysicsA > $sortingPhysicsB) {
    return -1;
  } else {

    if ($sortingCountA < $sortingCountB) {
      return 1;
    } else if ($sortingCountA > $sortingCountB) {
      return -1;
    } else {
      // Nothing
    }

  }
  
});

//var_dump($dwarfList);
//var_dump($hatsList);

foreach ($dwarfList as $d) {
  $dName = $d->getName();
  $dHat = $d->getHat();
  $dPhysics = $d->getPhysics();

  echo "($dHat) $dName <-> $dPhysics" . PHP_EOL;
}

?>