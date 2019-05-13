<?php

$companyUsers = [];
$input = "";

while (true) {
  $input = readline();
  if ($input == "End") { break; }
  $inputArr = explode(" -> ", $input);
  $company = $inputArr[0];
  $id = $inputArr[1];

  if (!key_exists($company, $companyUsers)) {
    $companyUsers[$company] = [];
  }
  $companyUsers[$company][] = $id;

}

ksort($companyUsers);

foreach ($companyUsers as $company => $users) {
  $users = array_unique($users);

  echo $company . PHP_EOL;

  foreach ($users as $user) {
    echo "-- " . $user . PHP_EOL;
  }

}

?>