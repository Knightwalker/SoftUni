<?php
include 'init.php';

/*
----- 1.Main Logic -----
1.1.If the login button have been clicked, run the following the script.

	----- 2.Error Handlers -----
	2.1.Check if inputs are empty
	2.2.Check if username does not exist
	2.3.Check if email is not activated
	2.4.Check if username exist
	2.5.Checking if the hashed password match
	2.6.Log in the user

1.2.Else exit
*/


if (isset($_POST['login'])) { //1.1

    $username = mysqli_real_escape_string($conn, $_POST['username']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);

		$sql = "SELECT * FROM users WHERE DB_user_username = '$username' OR DB_user_email = '$username'";
		$result = mysqli_query($conn, $sql);
		$username_exist = mysqli_num_rows($result);

		$sql = "SELECT * FROM users WHERE DB_user_username = '$username' OR DB_user_email = '$username' AND DB_user_email_activation = 1";
		$result = mysqli_query($conn, $sql);
		$email_activation = mysqli_num_rows($result);


	if (empty($username) || empty($password)) { //2.1
		header("Location: ../index.php?login=empty");
		exit();
	} else if ($username_exist == 0) { //2.2
		header("Location: ../index.php?login=error");
		exit();
	} else if ($email_activation == 0) { //2.3
		header("Location: ../index.php?login=activation");
		exit();
	} else { //2.4
		$user = mysqli_fetch_assoc($result);
		$hashedPwdCheck = password_verify($password, $user['DB_user_password']); //2.5

		if ($hashedPwdCheck == false) {
			header("Location: ../index.php?login=wrongpassword");
			exit();
		} else if ($hashedPwdCheck == true) { //2.6
			$_SESSION['session_user_logged_in'] = true;
			$_SESSION['session_user_id'] = $user['DB_user_id'];
			$_SESSION['session_user_username'] = $user['DB_user_username'];
			$_SESSION['session_user_email'] = $user['DB_user_email'];
			header("Location: ../index.php?login=success");
			exit();
		}	
	}
	
} else { //1.2
	header("Location: ../index.php?login=error");
	exit();
}