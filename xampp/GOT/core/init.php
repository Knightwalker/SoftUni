<?php
	session_start();

	//Declaring database connection
	$dbServername = "160.153.129.25";
	$dbUsername = "rmbb5z0ve003";
	$dbPassword = "Kriskali1405!";
	$dbName = "gotrpdatabase";
	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	//Declaring all PHP variables
	$errors = array();

?>