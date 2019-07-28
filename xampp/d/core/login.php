<?php
session_start();
include_once "database.php";

if (!isset($_POST['submit'])) {
  header("Location: ../bad.php");
  die();
}

if (isset($_POST['submit'])) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $sql = "SELECT * FROM `users` WHERE `username` = '$username'";
  $result = mysqli_query($conn, $sql);
  $resultCount = mysqli_num_rows($result);
  $resultArr = mysqli_fetch_assoc($result);
  
  // echo "<pre>";
  // var_dump($sql);
  // var_dump($resultCount);
  // var_dump($result);
  // echo "</pre>";
  // while ($row = mysqli_fetch_assoc($result)) {
  //   $data[] = $row;
  // }
  // echo '<pre>' , var_dump($data) , '</pre>';

  // Check if user exists
  if ($resultCount == 1) {
    $resutlUsername =  $resultArr["username"];
    $resultPassword =  $resultArr["password"];

    //Check if credentials match
    if (password_verify($password, $resultPassword) == true) {
     $_SESSION["username"] = $username; // -> create variable "username" in the global "$_SESSION" variable. Login the user.
     header("Location: ../index.php");
     exit();
    }
  }

}