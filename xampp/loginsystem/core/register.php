<?php
include_once "database.php";

if (!isset($_POST['submit'])) {
  header("Location: ../bad.php");
  die();
}

if (isset($_POST['submit'])) {
  //$username = mysqli_real_escape_string($conn, $_POST['username']);
  $username = $_POST["username"];
  $password = $_POST["password"];
  $email = $_POST['email'];

  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  $sql = "SELECT * FROM users WHERE username='$username'";
  $result = mysqli_query($conn, $sql);
  $resultCheck = mysqli_num_rows($result);
  $resultArr = mysqli_fetch_assoc($result);
  //var_dump($resultArr);

  var_dump($sql);
  var_dump($resultArr);

  // if the username is not taken -> register a new user
  if ($resultCheck == 0) {
    $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$hashedPassword', '$email')";
    mysqli_query($conn, $sql);
    header("Location: ../index.php?signup=success");
    exit();
  }

}
