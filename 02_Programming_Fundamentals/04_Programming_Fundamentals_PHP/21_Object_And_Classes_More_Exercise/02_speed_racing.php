<?php

class Car {
  private $model;
  private $fuelAmount;
  private $fuelConsumption;
  private $distance = 0;

  public function __construct ($model, $fuelAmount, $fuelConsumption) {
  $this->model = $model;
  $this->fuelAmount = $fuelAmount;
  $this->fuelConsumption = $fuelConsumption;
  }

  public function getModel() {
    return $this->model;
  }
  
  public function getFuelAmount() {
    return $this->fuelAmount;
  }

  public function getFuelConsumption() {
    return $this->fuelConsumption;
  }

  public function setFuelAmount($newFuelAmount) {
    $this->fuelAmount = $newFuelAmount;
  }

  public function setDistance($distance) {
    $this->distance += $distance;
  }

  public function getDistance() {
    return $this->distance;
  }

}

$listCars = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $input = explode(" ", readline());
  $model = $input[0];
  $fuelAmount = $input[1];
  $fuelConsumption = $input[2];
  $car = new Car($model, $fuelAmount, $fuelConsumption);
  $listCars[] = $car;
}

while (true) {
  $str = readline();
  if ($str == "End") { break; }
  $inputArr = explode(" ", $str);
  $command = $inputArr[0];
  $model = $inputArr[1];
  $distanceForTravel = $inputArr[2];

  foreach ($listCars as $car) {
    $currentCar = $car->getModel();
    $currentCarFuelAmount = $car->getFuelAmount();
    $currentCarFuelConsumption = $car->getFuelConsumption();
    
    //var_dump($currentCar);
    if ($currentCar == $model) {
      $fuelNeeded = $distanceForTravel * $currentCarFuelConsumption;

      //var_dump($currentCarFuelAmount);
      //var_dump($fuelNeeded);

      if ($currentCarFuelAmount >= $fuelNeeded) {
        $newFuelAmount = $currentCarFuelAmount - $fuelNeeded;
        $car->setFuelAmount($newFuelAmount);
        $car->setDistance($distanceForTravel);
      } else {
        echo "Insufficient fuel for the drive" . PHP_EOL;
      }
     
    }

  }

}

foreach ($listCars as $car) {
  $resFuel = $car->getFuelAmount();
  $resFuel = number_format($resFuel, 2, ".", "");
  echo "{$car->getModel()} $resFuel {$car->getDistance()}" . PHP_EOL;
}

?>