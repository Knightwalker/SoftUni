<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Witcher III | Epic Fantasy MMORPG Game</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
</head>
<body>

<?php 
  if (isset($_SESSION["username"])) {
    ?>
      <nav id="nav_grid">
        <div id="nav_logo">LOGO</div>
        <div id="nav_right">
          <a href="/index.php">HOME</a>
        </div>
        <div id="nav_left">
          <a href="/register.php">WELCOME {USER}</a>
          <a href="/logout.php">LOGOUT</a>
        </div>
      </nav>
    <?php
  } else { 
    ?>
      <nav id="nav_grid">
        <div id="nav_logo">LOGO</div>
        <div id="nav_right">
          <a href="/index.php">HOME</a>
        </div>
        <div id="nav_left">
          <a href="/login.php">LOGIN</a>
          <a href="/register.php">CREATE ACCOUNT</a>
        </div>
      </nav>
    <?php
  }
?>

<div id="master_grid">
  <div id="top">
  <?php 
      echo "Current URL = ";
      var_dump($_SERVER['REQUEST_URI']);
      echo "<br>";
      echo "Current Session = ";
      var_dump($_SESSION);
    ?>
  </div>
  <div id="main">

    <div id="register_container">
      <div id="register_h1">Create Account</div>
      <div id="register_body">
        
        <!-- BEGIN Register_form -->
        <form id="register_form" autocomplete="off" action="core/loginsystem.php" method="POST">
          <div class="register_grid">
            <div id="username_icon" class="register_grid_icon"></div>
            <label class="register_grid_label">Username</label>
            <input class="register_grid_input" type="text" name="username">
            <div class="register_grid_error"></div>
          </div>

          <div class="register_grid">
            <div id="password_icon" class="register_grid_icon"></div>
            <label class="register_grid_label">Password</label>
            <input class="register_grid_input" type="password" name="password">
            <div class="register_grid_error"></div>
          </div>

          <div class="register_grid">
            <div id="password_icon" class="register_grid_icon"></div>
            <label class="register_grid_label">Confirm Password</label>
            <input class="register_grid_input" type="password" name="passwordRe">
            <div class="register_grid_error"></div>
          </div>

          <div class="register_grid">
            <div id="email_icon" class="register_grid_icon"></div>
            <label class="register_grid_label">Email</label>
            <input class="register_grid_input" type="text" name="email">
            <div class="register_grid_error"></div>
          </div>

          <div class="register_normalbox">
            <div>
              <input id="verify_age" type="checkbox" name="verify_age" value="yes"> 
              <label for="verify_age">I am over 18 years of age.</label>
            </div>
            <div>
              <input id="verify_tos" type="checkbox" name="verify_tos" value="yes"> 
              <label for="verify_tos">I agree to the <a href="index.php">Terms and Conditions.</a></label>
            </div>
            <br>
            <p>*An email confirmation will be sent to this address to verify it before you can log in.</p>
          </div>

          <input class="register_form_button" type="submit" name="register_form" value="register" disabled/>
          <hr class="register_hr">

          <div>
            <p>Already have an account?</p>
            <p class="register_block"><a href="index.php">Login</a> or <a href="index.php">Reset Password</a></p>
          </div>        
        </form> 
        <!-- END Register_form -->

      </div>
    </div>

  
  </div>
  <div id="right">
    <div class="right_head">Main Page</div>
    <div class="right_body"></div>
  </div>
</div>




<script>

  const registerFormEl = document.getElementById("register_form");
  const registerUsernameEl = registerFormEl.children[0].children[2];
  const registerPasswordEl = registerFormEl.children[1].children[2];
  const registerPasswordReEl = registerFormEl.children[2].children[2];
  const registerEmailEl = registerFormEl.children[3].children[2];
  const registerAgeEl = registerFormEl.children[4].children[0].children[0];
  const registerTosEl = registerFormEl.children[4].children[1].children[0];
  const registerSubmitBtnEl = registerFormEl.children[5];

  registerUsernameEl.addEventListener("focusin", function(){ RegisterFormController.main("username", "focusin"); }, false);
  registerUsernameEl.addEventListener("focusout", function(){ RegisterFormController.main("username", "focusout"); }, false);
  registerPasswordEl.addEventListener("focusin", function(){ RegisterFormController.main("password", "focusin"); }, false);
  registerPasswordEl.addEventListener("focusout", function(){ RegisterFormController.main("password", "focusout"); }, false);
  registerPasswordReEl.addEventListener("focusin", function(){ RegisterFormController.main("passwordre", "focusin"); }, false);
  registerPasswordReEl.addEventListener("focusout", function(){ RegisterFormController.main("passwordre", "focusout"); }, false);
  registerEmailEl.addEventListener("focusin", function(){ RegisterFormController.main("email", "focusin"); }, false);
  registerEmailEl.addEventListener("focusout", function(){ RegisterFormController.main("email", "focusout"); }, false);
  registerAgeEl.addEventListener("click", function(){ RegisterFormController.main("age", "click"); }, false);
  registerTosEl.addEventListener("click", function(){ RegisterFormController.main("tos", "click"); }, false);
  registerSubmitBtnEl.addEventListener("click", function(){ RegisterFormController.main("submit", "click"); }, false);

  const RegisterFormController = function() {
    let validateUsernameLen = false;
    let validatePasswordLen = false;
    let validatePasswordReMatch = false;
    let validatePasswordReEmpty = false;
    let validateEmailRegex = false; 
    let validateEmailEmpty = false; 
    let validateYears = false;
    let validateTos = false;

    let usernameErrorEl = registerUsernameEl.parentElement.children[3];
    let passwordErrorEl = registerPasswordEl.parentElement.children[3];
    let passwordReErrorEl = registerPasswordReEl.parentElement.children[3];
    let passwordEmailEl = registerEmailEl.parentElement.children[3];

    function main(field, mode) {
      let parentEl = event.currentTarget.parentElement;
      let labelEl = parentEl.getElementsByClassName("register_grid_label")[0];
      let inputEl = parentEl.getElementsByClassName("register_grid_input")[0];
      let errorEl = parentEl.getElementsByClassName("register_grid_error")[0];
      console.log("field = " + field);
      console.log("mode = " + mode);
      console.log(labelEl);
      console.log(inputEl);

      // BEING VISUALS - Label movement on focusin and focusout
      if (mode == "focusin") {
        labelEl.style.fontSize = "15px";
        labelEl.style.transform = "translate(-60px, -26px)";

      } else if (mode == "focusout" && inputEl.value == "") {
        labelEl.style.fontSize = "24px";
        labelEl.style.transform = "initial";
      }
      // END VISUALS - Label movement on focusin and focusout
      
      // BEGIN LOGIC - Validation and Error Handling
      if (field == "username" && mode == "focusout") {
        let username = registerUsernameEl.value;

        // Username must be between 3-25 characters long
        if (!(username.length >= 3 && username.length <= 25)) { validateUsernameLen = false; } 
        else { validateUsernameLen = true; }
        
      } else if (field == "password" && mode == "focusout") {
        let password = registerPasswordEl.value;

        // Password must be atleast 8 characters long
        if (!(password.length >= 8)) { validatePasswordLen = false; } 
        else { validatePasswordLen = true; }

      } else if (field == "passwordre" && mode == "focusout") {
        let password = registerPasswordEl.value;
        let passwordre = registerPasswordReEl.value;

        // PasswordRe field cannot be empty
        if (passwordre == "") { validatePasswordReEmpty = false; }
        else { validatePasswordReEmpty = true; }

        // Password and PasswordRe must match
        if (!(password == passwordre)) { validatePasswordReMatch = false; }
        else { validatePasswordReMatch = true; }
      
      } else if (field == "email" && mode == "focusout") {
        let email = registerEmailEl.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;

        // Email field cannot be empty
        if (email == "") { validateEmailEmpty = false; }
        else { validateEmailEmpty = true; }

        // Email validate regex
        if (!regex.test(email)) { validateEmailRegex = false; } 
        else { validateEmailRegex = true; }

      } else if (field == "age" && mode == "click") {

        // User agrees that their age is above 18
        if (registerAgeEl.checked == false) { validateYears = false; } 
        else { validateYears = true; }

      } else if (field == "tos" && mode == "click") {

        // User agrees on the TOS
        if (registerTosEl.checked == false) { validateTos = false; } 
        else { validateTos = true; }

      }
      // END BEGIN LOGIC - Validation and Error Handling

      // BEGIN VISUALS - Validation and Error Handling
      if (field == "username" && mode == "focusout") {
        if (!validateUsernameLen) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Username must be between 3 and 25 characters";
        } else {
          parentEl.style.borderBottom = "1px solid #3c763d";
          errorEl.innerHTML = "";
        }

      } else if (field == "password" && mode == "focusout") {
        if (!validatePasswordLen) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Password must be atleast 8 characters long";
        } else {
          parentEl.style.borderBottom = "1px solid #3c763d";
          errorEl.innerHTML = "";
        }

      } else if (field == "passwordre" && mode == "focusout") {

        if (!validatePasswordReEmpty) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Field cannot be empty";
        } else if (!validatePasswordReMatch) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Passwords do not match";
        } else {
          parentEl.style.borderBottom = "1px solid #3c763d";
          errorEl.innerHTML = "";
        }

      } else if (field == "email" && mode == "focusout") {
        if (!validateEmailEmpty) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Field cannot be empty";
        } else if (!validateEmailRegex) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Email is not valid";
        } else {
          parentEl.style.borderBottom = "1px solid #3c763d";
          errorEl.innerHTML = "";
        }

      }
      // END VISUALS - Validation and Error Handling

      // IF all fields are valid -> Enable the submit button.
      if (validateUsernameLen && validatePasswordLen && validatePasswordReEmpty && validatePasswordReMatch && validateEmailEmpty && validateEmailRegex && validateYears && validateTos) {
        registerSubmitBtnEl.disabled = false;
      } else {
        registerSubmitBtnEl.disabled = true;
      }

    }

    return {
      main: function(field, mode) {
        main(field, mode);
      }
    }

  }();

</script>


<div id="footer"></div>
</body>
</html>