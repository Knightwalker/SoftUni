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

<div id="wrapper">
  <div id="container">

    <div id="main">
      <div id="main_head">Register Page</div>

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
              <input class="register_grid_input" type="text" name="password">
              <div class="register_grid_error"></div>
            </div>

            <div class="register_grid">
              <div id="password_icon" class="register_grid_icon"></div>
              <label class="register_grid_label">Confirm Password</label>
              <input class="register_grid_input" type="text" name="passwordRe">
            </div>

            <div class="register_grid">
              <div id="email_icon" class="register_grid_icon"></div>
              <label class="register_grid_label">Email</label>
              <input class="register_grid_input" type="text" name="email">
              <div class="register_grid_error"></div>
            </div>

            <div class="register_normalbox">
              <div>
                <input type="checkbox" id="verify_age" name="verify_age" value="yes"> 
                <span for="verify_age">I am over 18 years of age.</span>
              </div>
              <div>
                <input type="checkbox" id="verify_tos" name="verify_tos" value="yes"> 
						    <span for="verify_tos">I agree to the <a href="index.php">Terms and Conditions.</a></span>
              </div>
              <br>
              <p>*An email confirmation will be sent to this address to verify it before you can log in.</p>
            </div>

            <button class="register_form_button" type="submit">Register</button>
            <hr class="register_hr">

            <div>
              <p>Already have an account?</p>
              <p class="register_block"><a href="index.php">Login</a> or <a href="index.php">Reset Password</a></p>
            </div>

            <input type="hidden" name="register_form">
          </form> 
          <!-- END Register_form -->

        </div>
      </div>

    </div>

  </div>
</div>

<script>

  const registerFormEl = document.getElementById("register_form");
  const registerUsernameEl = registerFormEl.children[0].children[2];
  const registerPasswordEl = registerFormEl.children[1].children[2];
  const registerPasswordReEl = registerFormEl.children[2].children[2];
  const registerEmailEl = registerFormEl.children[3].children[2];
  const registerSubmitBtnEl = registerFormEl.children[5];

  registerUsernameEl.addEventListener("focusin", function(){ fRegisterForm("username", "focusin"); }, false);
  registerUsernameEl.addEventListener("focusout", function(){ fRegisterForm("username", "focusout"); }, false);
  registerPasswordEl.addEventListener("focusin", function(){ fRegisterForm("password", "focusin"); }, false);
  registerPasswordEl.addEventListener("focusout", function(){ fRegisterForm("password", "focusout"); }, false);
  registerPasswordReEl.addEventListener("focusin", function(){ fRegisterForm("passwordre", "focusin"); }, false);
  registerPasswordReEl.addEventListener("focusin", function(){ fRegisterForm("passwordre", "focusin"); }, false);
  registerEmailEl.addEventListener("focusin", function(){ fRegisterForm("email", "focusin"); }, false);
  registerEmailEl.addEventListener("focusin", function(){ fRegisterForm("email", "focusin"); }, false);
  registerSubmitBtnEl.addEventListener("click", function(){ fRegisterForm("submit", "submit"); }, false);

  console.log(registerFormEl.children);
  console.log(registerSubmitBtnEl);

  function fRegisterForm(field, mode) {
    let parentEl = event.currentTarget.parentElement;
    let labelEl = parentEl.getElementsByClassName("register_grid_label")[0];
    let inputEl = parentEl.getElementsByClassName("register_grid_input")[0];
    let errorEl = parentEl.getElementsByClassName("register_grid_error")[0];
    console.log("field = " + field);
    console.log("mode = " + mode);
    console.log(inputEl);

    // focusin and focusout input fields visuals
    if (mode == "focusin") {
      labelEl.style.fontSize = "15px";
      labelEl.style.transform = "translate(-60px, -26px)";

    } else if (mode == "focusout" && inputEl.value == "") {
      labelEl.style.fontSize = "24px";
      labelEl.style.transform = "initial";
    }
    
    // validate username
    if (field == "username") {
      let username = inputEl.value;

      if (mode == "focusout") {
        // Username must be between 3-25 characters long
        if (!(username.length >= 3 && username.length <= 25)) {
          parentEl.style.borderBottom = "1px solid #be1e37";
          errorEl.innerHTML = "Username must be between 3 and 25 characters";
        } else {
          parentEl.style.borderBottom = "1px solid #3c763d";
          errorEl.innerHTML = "";
        }
      }

    } 

  }


</script>


<div id="footer"></div>
</body>
</html>