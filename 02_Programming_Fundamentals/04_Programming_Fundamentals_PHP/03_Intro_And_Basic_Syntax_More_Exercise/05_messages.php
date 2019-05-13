<?php

$n = readline();
$msg = "";
for ($i = 0; $i < $n; $i++) {
  $input = readline();

  switch ($input) {
      case "0":
          $msg .= " ";
          break;
      case "2":
          $msg .= "a";
          break;
      case "22":
          $msg .= "b";
          break;
      case "222":
          $msg .= "c";
          break;
      case "3":
          $msg .= "d";
          break;
      case "33":
          $msg .= "e";
          break;
      case "333":
          $msg .= "f";
          break;
      case "4":
          $msg .= "g";
          break;
      case "44":
          $msg .= "h";
          break;
      case "444":
          $msg .= "i";
          break;
      case "5":
          $msg .= "j";
          break;
      case "55":
          $msg .= "k";
          break;
      case "555":
          $msg .= "l";
          break;
      case "6":
          $msg .= "m";
          break;
      case "66":
          $msg .= "n";
          break;
      case "666":
          $msg .= "o";
          break;
      case "7":
          $msg .= "p";
          break;
      case "77":
          $msg .= "q";
          break;
      case "777":
          $msg .= "r";
          break;
      case "7777":
          $msg .= "s";
          break;
      case "8":
          $msg .= "t";
          break;
      case "88":
          $msg .= "u";
          break;
      case "888":
          $msg .= "v";
          break;
      case "9":
          $msg .= "w";
          break;
      case "99":
          $msg .= "x";
          break;
      case "999":
          $msg .= "y";
          break;
      case "9999":
          $msg .= "z";
          break;
      default:
          echo "Invalid combination" . PHP_EOL;
  }

}

echo $msg;

?>