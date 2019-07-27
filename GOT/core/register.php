<?php
include 'init.php';

//If the register button have been clicked, run the following the script. Else return user to the register.php
if (isset($_POST['submit'])) {

    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $password2 = mysqli_real_escape_string($conn, $_POST['password2']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $sex = mysqli_real_escape_string($conn, $_POST['sex']);

    $verify_age = $_POST['verify_age']; //This variable does not exist in the DB. Checking purposes only.
    $verify_tos = $_POST['verify_tos']; //This variable does not exist in the DB. Checking purposes only.

    //Error handlers
        //Preparing variable for existing usernames
        $sql = "SELECT * FROM users WHERE DB_user_username='$username'";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        //Preparing variable for the hashed password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Check if there are empty fields. Else register"
    if (empty($username) || empty($password) || empty($password2) || empty($email) || empty($verify_age) || empty($verify_tos)) {
    	header("Location: ../register.php?error=empty");
    	exit();
    // Check if username input characters are valid
    } else if (!preg_match("/^[a-zA-Z]*$/", $username)) {
        header("Location: ../register.php?error=invalid");
        exit();  
    // Check if the username already exist in the database
    } else if ($resultCheck > 0) {
        header("Location: ../register.php?error=user_taken");
        exit();  
    // Check if the email is valid 
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {   
        header("Location: ../register.php?error=invalid_email");
        exit(); 
    // Check if the passwords match each other
    } else if ($password != $password2) {
        header("Location: ../register.php?error=passwords_not_identical");
        exit();
    // Register - Insert the user into the database
    } else {
    //Inserting the data into the DB
        $sql = "INSERT INTO users (DB_user_username, DB_user_password, DB_user_email, DB_user_sex) VALUES ('$username', '$hashedPassword', '$email', '$sex');";
        mysqli_query($conn, $sql);
        header("Location: ../index.php?singup=succes");
        exit();
    }

} else {
    header("Location: ../register.php");
    exit();
}
   
?>

