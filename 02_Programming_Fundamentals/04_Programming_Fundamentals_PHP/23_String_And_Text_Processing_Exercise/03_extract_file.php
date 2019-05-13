<?php

$path = readline();
$indexStart = strripos($path, "\\");
$file = "";
$fileName = "";
$extensionName = "";

for ($i = $indexStart + 1; $i < strlen($path); $i++) {
  $file .= $path[$i];
}

$indexStartExtension = strripos($file, ".");

for ($i = 0; $i < $indexStartExtension; $i++) {
  $fileName .= $file[$i];
}

for ($i = $indexStartExtension + 1; $i < strlen($file); $i++) {
  $extensionName .= $file[$i];
}

echo "File name: " . $fileName . PHP_EOL;
echo "File extension: " . $extensionName . PHP_EOL;

?>