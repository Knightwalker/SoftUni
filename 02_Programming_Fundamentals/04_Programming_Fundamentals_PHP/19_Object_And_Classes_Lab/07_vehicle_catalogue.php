<?php

class Catalog 
{
  private $cars = [];
  private $trucks = [];

  public function __construct($cars, $trucks) {
    $this->cars = $cars;
    $this->trucks = $trucks;
  }

  public function getCars(): array{
    return $this->cars;
  }

  public function getTrucks(): array{
    return $this->trucks;
  }

}

class Car 
{
  private $type;
  private $brand;
  private $model;
  private $power;

  public function __construct($type, $brand, $model, $power) {
    $this->type = $type;
    $this->brand = $brand;
    $this->model = $model;
    $this->power = $power;
  }

  public function getBrand() {
    return $this->brand;
  }

  public function getModel() {
    return $this->model;
  }

  public function getPower() {
    return $this->power;
  }

}

class Truck 
{
  private $type;
  private $brand;
  private $model;
  private $weight;

  public function __construct($type, $brand, $model, $weight) {
    $this->type = $type;
    $this->brand = $brand;
    $this->model = $model;
    $this->weight = $weight;
  }

  public function getBrand() {
    return $this->brand;
  }

  public function getModel() {
    return $this->model;
  }

  public function getWeight() {
    return $this->weight;
  }

}

$catalog = [];
$listOfCars = [];
$listOfTrucks = [];

while (true) {
  $input = readline();
  if ($input == "end") { break; }
  $inputArr = explode("/", $input);

  if ($inputArr[0] == "Car") {
    $type = $inputArr[0];
    $brand = $inputArr[1];
    $model = $inputArr[2];
    $power = $inputArr[3];
    $listOfCars[] = new Car($type, $brand, $model, $power);
  } else {
    $type = $inputArr[0];
    $brand = $inputArr[1];
    $model = $inputArr[2];
    $weight = $inputArr[3];
    $listOfTrucks[] = new Truck($type, $brand, $model, $weight);
  }
}

usort($listOfCars, function($a, $b)
{
    return strcmp(($a->getBrand()), ($b->getBrand()));
});

usort($listOfTrucks, function($a, $b)
{
    return strcmp(($a->getBrand()), ($b->getBrand()));
});

$catalog[] = new Catalog($listOfCars, $listOfTrucks);

foreach ($catalog as $key => $collection) {

  echo "Cars: " . PHP_EOL;
  foreach ($collection->getCars() as $value) {
    echo "{$value->getBrand()}: {$value->getModel()} - {$value->getPower()}hp" . PHP_EOL;
  }

  echo "Trucks: " . PHP_EOL;
  foreach ($collection->getTrucks() as $value) {
    echo "{$value->getBrand()}: {$value->getModel()} - {$value->getWeight()}kg" . PHP_EOL;
  }

}

//var_dump($catalog);

?>