<?php 

$people = readline();
$groupType = readline();
$dayOfWeek = readline();

$price = 0.0; 

if ($dayOfWeek == "Friday") {
  if ($groupType == "Students") {
    $price = 8.45;
  } else if ($groupType == "Business") {
    $price = 10.90;
  } else if ($groupType == "Regular") {
    $price = 15;
  }
} else if ($dayOfWeek == "Saturday") {
  if ($groupType == "Students") {
    $price = 9.80;
  } else if ($groupType == "Business") {
    $price = 15.60;
  } else if ($groupType == "Regular") {
    $price = 20;
  }
} else if ($dayOfWeek == "Sunday") {
  if ($groupType == "Students") {
    $price = 10.46;
  } else if ($groupType == "Business") {
    $price = 16;
  } else if ($groupType == "Regular") {
    $price = 22.50;
  }
}

if ($groupType == "Students") {
  if ($people >= 30) {
    $price = $price - ($price * 0.15);
  }
} else if ($groupType == "Business") {
  if ($people >= 100) {
    $people -= 10;
  }
} else if ($groupType == "Regular") {
  if ($people >= 10 && $people <= 20) {
    $price = $price - ($price * 0.05);
  }
}

$res = number_format($price * $people, 2, '.', '');
echo "Total price: " . $res;

?>