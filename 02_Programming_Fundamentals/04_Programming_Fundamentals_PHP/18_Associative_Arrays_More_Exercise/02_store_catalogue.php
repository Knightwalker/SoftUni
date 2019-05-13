<?php

$n = readline();
$inputArr = "";
$storeList = [];

for ($i = 0; $i < $n; $i++) {
  $inputArr = explode(" : ", readline());
  $productName = $inputArr[0];
  $productPrice = floatval($inputArr[1]);
  $productInitial = $productName[0];

  if (!key_exists($productInitial, $storeList)) {
    $storeList[$productInitial] = [];
  }
  $storeList[$productInitial][$productName] = $productPrice;

}

  ksort($storeList);
  foreach ($storeList as $products => $productsArr) {
    ksort($productsArr);

    echo $products . PHP_EOL;
    foreach ($productsArr as $product => $price) {
      echo "  " . $product . ": " . $price . PHP_EOL;
    }

  }
  
  //var_dump($storeList);

?>