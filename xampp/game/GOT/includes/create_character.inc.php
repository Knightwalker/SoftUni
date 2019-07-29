<?php
//If the register button have been clicked, run the following the script. Else return user to the register.php
if (isset($_POST['submit'])) {

    //Establish connection to the database and create a new user
    include_once 'dbh.inc.php';

    $php_character_faceclaim = $_POST['php_character_faceclaim'];
    $php_character_gender = $_POST['php_character_gender'];
    $php_character_house = $_POST['php_character_house'];
    $php_character_religion = $_POST['php_character_religion'];

    //Error handlers
    // Check if there are empty fields. Else register"
    if (empty ($php_character_gender) or empty($php_character_house) or empty($php_character_religion)) {
    	header("Location: ../register.php?error=empty");
    	exit();
    } else {
        //Inserting the data into the DB
        $sql = "INSERT INTO users_characters (DB_character_faceclaim, DB_character_gender, DB_character_house, DB_character_religion) VALUES ('$php_character_faceclaim','$php_character_gender','$php_character_house','$php_character_religion');";
        mysqli_query($conn, $sql);
        header("Location: ../index.php?singup=succes");
        exit();
    }

} else {
    header("Location: ../register.php");
    exit();
}
   
?>

