<?php
include_once "database.php";

// If a POST method was not utilized and they tried to access the script directly from the url -> Redirect to the "bad.php" page
if (!isset($_POST['register_form'])) {
  header("Location: ../bad.php");
  exit();
}

echo "<pre>";
var_dump($_POST);
echo "</pre>";

// If a POST request with the name "register_form" was made -> Register a new user
// If a POST request with the name "login_form" was made -> Login the user
if (isset($_POST['register_form'])) { 
  RegisterNewUser($conn); 
} else if (isset($_POST['login_form'])) {
  // TODO
}

function RegisterNewUser($conn) {
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
  $username = mysqli_real_escape_string($conn, $_POST["username"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  $passwordRe = mysqli_real_escape_string($conn, $_POST["passwordRe"]);
  $email = mysqli_real_escape_string($conn, $_POST['email']);

  $sql = "SELECT * FROM users WHERE username='$username'";
  $result = mysqli_query($conn, $sql);
  $resultCheck = mysqli_num_rows($result);
  $resultArr = mysqli_fetch_assoc($result);

  echo "<pre>";
  var_dump($sql);
  var_dump($result);
  var_dump($resultCheck);
  var_dump($resultArr);
  echo "</pre>";

  // If the username is taken -> exit();
  if ($resultCheck >= 1) {
    header("Location: ../register.php?username=taken");
    exit();
  }

  // If the username is not taken -> register a new user
  if ($resultCheck == 0) {
    $passwordHashed = password_hash($password, PASSWORD_DEFAULT); // Hash the password !!!
    $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$passwordHashed', '$email')";
    mysqli_query($conn, $sql);
    header("Location: ../index.php?register=success");
    exit();
  }

}
