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

    <form id="form_login" action="core/loginsystem.php" method="POST">
        <div><input type="text" name="username" placeholder="Username..."></div>
        <div><input type="text" name="password" placeholder="Password..."></div>
        <input type="submit" name="login_form" value="Login">
    </form>

  </div>
  <div id="right">
    <div class="right_head">Main Page</div>
    <div class="right_body"></div>
  </div>
</div>

<div id="footer"></div>
</body>
</html>