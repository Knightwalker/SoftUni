<?php

class Person {
  private $name;
  private $money;
  private $bag = [];

  public function __construct ($name, $money) {
    $this->name = $name;
    $this->money = $money;
  }

  public function getName() {
    return $this->name;
  }

  public function getMoney() {
    return $this->money;
  }

  public function setMoney($money) {
    $this->money = $money;
  }

  public function addToBag($product) {
    $this->bag[] = $product;
  }

  public function getBag() {
    return $this->bag;
  }

}

class Product {
  private $name;
  private $cost;

  public function __construct ($name, $cost) {
    $this->name = $name;
    $this->cost = $cost;
  }

  public function getName() {
    return $this->name;
  }

  public function getCost() {
    return $this->cost;
  }

}

$listPeople = [];
$listProducts = [];
$inputOneArr = explode(";", readline());
$inputTwoArr = explode(";", readline());

foreach ($inputOneArr as $personAttributes) {
  $currentInput = explode("=", $personAttributes);
  $personName = $currentInput[0];
  $personMoney = $currentInput[1];

  $person = new Person($personName, $personMoney);
  $listPeople[] = $person;
}

foreach ($inputTwoArr as $personAttributes) {
  $currentInput = explode("=", $personAttributes);
  $personName = $currentInput[0];
  $personMoney = $currentInput[1];

  $products = new Product($personName, $personMoney);
  $listProducts[] = $products;
}

while (true) {
  $input = readline();
  if ($input == "END") { break; }
  $inputArr = explode(" ", $input);
  $personName = $inputArr[0];
  $productName = $inputArr[1];

  //var_dump($inputArr);
  $currentProductCost = 0;
  foreach ($listProducts as $products) {
    $currentProductName = $products->getName();

    if ($currentProductName == $productName) {
      $currentProductCost = $products->getCost();
      break;
    }
  }
  
  foreach ($listPeople as $person) {
    $currentPersonName = $person->getName();
    $currentPersonMoney = $person->getMoney();

    if ($currentPersonName == $personName) {

      if ($currentPersonMoney >= $currentProductCost) {
        $money = $currentPersonMoney - $currentProductCost;
        $person->setMoney($money);
        $person->addToBag($productName);
        echo "$personName bought $productName" . PHP_EOL;
        break;
      } else {
        echo "$personName can't afford $productName" . PHP_EOL;
      }

    }

  }


}

//var_dump($listPeople);

foreach ($listPeople as $people) {
  $pname = $people->getName();
  $barr = $people->getBag();

  if (count($barr) > 0) {
    echo $pname . " - ";
    echo implode(", ", $barr);
    echo PHP_EOL;
  } else {
    echo $pname . " - Nothing bought";
  }

}

?>