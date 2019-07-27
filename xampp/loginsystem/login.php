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
      <div id="main_head">Login Page</div>

      <form id="form_login" action="core/login.php" method="POST">
        <div><input type="text" name="username" placeholder="Username..."></div>
        <div><input type="text" name="password" placeholder="Password..."></div>
        <button type="submit" name="submit">Login</button>
      </form>

    </div>

  </div>
</div>

</body>
</html>