<?php

$DB_Host = "localhost"; // Host, Server Name, etc
$DB_Username = "root";
$DB_Password = "";
$DB_Name = "loginsystem";

$conn = mysqli_connect($DB_Host, $DB_Username, $DB_Password, $DB_Name);

// SET DSN
$dsn = 'mysql:host=' . $DB_Host . ';dbname=' . $DB_Name;

// Create a PDO instance
$pdo = new PDO($dsn, $DB_Username, $DB_Password);