<?php

class Song 
{

  private $typeList;
  private $name;
  private $time;

  public function __construct($typeList, $name, $time) 
  {
    $this->typeList = $typeList;
    $this->name = $name;
    $this->time = $time;
  }

  public function getTypeList()
  {
    return $this->typeList;
  }

  public function getName()
  {
    return $this->name;
  }

}

$songsList = [];
$n = readline();

for ($i = 0; $i < $n; $i++) {
  $input = explode("_", readline());
  $typeList = $input[0];
  $name = $input[1];
  $time = $input[2];
  $song = new Song($typeList, $name, $time);
  $songsList[] = $song;
}

$filterTypeList = readline();

if ($filterTypeList == "all") {
  foreach ($songsList as $value) {
    echo $value->getName() . PHP_EOL;
  } 
} else {
  foreach ($songsList as $value) {

    if ($value->getTypeList() === $filterTypeList) {
      echo $value->getName() . PHP_EOL;
    }

  }
}

?>