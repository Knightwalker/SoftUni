<?php
session_start();
include "database.php";

echo "<pre>";
var_dump($_POST);
echo "</pre>";

// If a POST request with the name "register_form" was made -> Register a new user
if (isset($_POST['register_form'])) { 
  RegisterUser($db); 
  
// If a POST request with the name "login_form" was made -> Login the user
} else if (isset($_POST['login_form'])) {
  LoginUser($db);

// If a POST method was not utilized and they tried to access the script directly from the url -> Redirect to the "bad.php" page
} else {
  header("Location: ../bad.php");
  exit();
}

function RegisterUser($db) {
  // Check for empty fields -> if true then exit();
  if ($_POST["username"] == "" || $_POST["password"] == "" || $_POST["passwordRe"] == "" || $_POST["email"] == "") {
    echo "empty fields";
    exit();
  }
  // Username must be between 3-25 characters long
  if (!(strlen($_POST["username"]) >= 3 && strlen($_POST["username"]) <= 25)) {
    echo "invalid username";
    exit();
  }
  // Password must be atleast 8 characters long -> if not exit();
  if (!(strlen($_POST["password"]) >= 8)) {
    echo "Password must be atleast 8 characters long";
    exit();
  }
  // Password and PasswordRe must match -> if not exit();
  if ($_POST["password"] != $_POST["passwordRe"]) { 
    echo "Passwords do not match";
    exit();
  }
  // Email validate regex
  if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/m', $_POST["email"])) {
    echo "Invalid email";
    exit();
  }

  // Did they verify their age? -> if not exit();
  if (!isset($_POST["verify_age"])) { 
    echo "did not verify age";
    exit();
  }
  // Did they verify the tos? -> if not exit();
  if (!isset($_POST["verify_tos"])) { 
    echo "did not verify tos";
    exit();
  }

  // Purify input
  $username = $_POST["username"];
  $password = $_POST["password"];
  $passwordRe = $_POST["passwordRe"];
  $email = $_POST['email'];

  $sql = "SELECT * FROM `users` WHERE `username` = :username";
  $stmt = $db->prepare($sql);
  $stmt->bindParam(':username', $username, PDO::PARAM_STR);
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $resultCount = $stmt->rowCount();

  // echo "<pre>";
  // var_dump($result);
  // var_dump($resultCount);
  // echo "</pre>";
  // return;

  // If the username is taken -> exit();
  if ($resultCount == 1) {
    header("Location: ../register.php?username=taken");
    exit();
  
  // If the username is not taken -> register a new user
  } else if ($resultCount == 0) {
    $passwordHashed = password_hash($password, PASSWORD_DEFAULT); // Hash the password !!!
    $sql = "INSERT INTO users (username, password, email) VALUES (:username, :passwordHashed, :email)";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':passwordHashed', $passwordHashed, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    
    header("Location: ../index.php?register=success");
    exit();
  }

}

function LoginUser($db) {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $stmt = $db->prepare("SELECT * FROM `users` WHERE `username` = :username");
  $stmt->bindParam(':username', $username, PDO::PARAM_STR);
  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $resultCount = $stmt->rowCount();
  
  //echo '<pre>' , var_dump($result) , '</pre>';
  //return;

  // User Does Not Exist
  if ($resultCount == 0) {
    echo "//TODO -> User Does Not Exist";
  // User Exists
  } else if ($resultCount == 1) {
    $_SESSION["username"] = $username;
    header("Location: ../register.php?login=success");
  }

}
