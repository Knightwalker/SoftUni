<?php

class Car {

  private $model;
  private $engineSpeed;
  private $enginePower;
  private $cargoWeight;
  private $cargoType;

  public function __construct ($model, $engineSpeed, $enginePower, $cargoWeight, $cargoType) {
    $this->model = $model;
    $this->engineSpeed = $engineSpeed;
    $this->enginePower = $enginePower;
    $this->cargoWeight = $cargoWeight;
    $this->cargoType = $cargoType;
  }

  public function getModel() {
    return $this->model;
  }

  public function getCargoType() {
    return $this->cargoType;
  }

  public function getCargoWeight() {
    return $this->cargoWeight;
  }

  public function getEnginePower() {
    return $this->enginePower;
  }

}

$listCars = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $input = explode(" ", readline());
  $model = $input[0];
  $engineSpeed = $input[1];
  $enginePower = $input[2];
  $cargoWeight = $input[3];
  $cargoType = $input[4];
  $car = new Car($model, $engineSpeed, $enginePower, $cargoWeight, $cargoType);
  $listCars[] = $car;
}

$sort = readline();
if ($sort == "flamable") {
 foreach($listCars as $car) {

    if ($car->getCargoType() == "flamable") {
      if ($car->getEnginePower() > 250) {
        echo $car->getModel() . PHP_EOL;
      }
    }

  }  
} else if ($sort == "fragile") {
   foreach($listCars as $car) {

    if ($car->getCargoType() == "fragile") {
      if ($car->getCargoWeight() < 1000) {
        echo $car->getModel() . PHP_EOL;
      }
    }

  }  
}

?>