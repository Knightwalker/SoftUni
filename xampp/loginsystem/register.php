<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
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
          <a href="/logout.php">LOGOUT</a>
          <a href="/register.php">CREATE ACCOUNT</a>
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
          <form class="register_form" action="core/register.php" method="POST">
            <div class="register_flexbox">
              <div class="register_icon"></div>
              <input type="text" name="username" class="register_input" placeholder="Username...">
            </div>
            <div class="register_flexbox">
              <div class="register_icon"></div>
              <input type="text" name="password" class="register_input" placeholder="Password...">
            </div>
            <div class="register_flexbox">
              <div class="register_icon"></div>
              <input type="text" name="repassword" class="register_input" placeholder="Re-Type Password...">
            </div>
            <div class="register_flexbox">
              <div class="register_icon"></div>
              <input type="text" name="email" class="register_input" placeholder="Email...">
            </div>

            <div class="register_normalbox">
              <div>
                <span>And are you a</span> 
                <input type="radio" id="sexfemale" name="sex" value="female">
                <label for="sexfemale"> Female or a </label>
                <input type="radio" id="sexmale" name="sex" value="male" checked="checked">
                <label for="sexmale">Male?</label>
              </div>
              <br>
              <div>
                <input type="checkbox" id="verify_age" name="verify_age" value="yes"> 
                <label for="verify_age">I am over 17 years of age.</label>
              </div>
              <div>
                <input type="checkbox" id="verify_tos" name="verify_tos" value="yes"> 
						    <label for="verify_tos">I agree to the Terms and Conditions.</label>
              </div>
              <br>
              <p>*An email confirmation will be sent to this address to verify it before you can log in.</p>
            </div>

            <button id="register_button" type="submit" name="submit">Register</button>
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

  </div>
</div>

</body>
</html>