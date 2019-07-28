<?php
  include 'core/init.php';
  include 'core/functions.php';
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Game of Thrones | Epic Fantasy Online MMORPG Game | Free to Play </title>
  <link rel="icon" href="images/crown.jpg" type="image/png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="loginsystem/loginsystem.css">

  <!-- Google Fonts -->
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Architects+Daughter">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
</head>

<body>
<div id="gameofthrones_wrapper">

  <div id="asoiaf_navbar_first" class="container-fluid">
        <?php //* START NAVBAR > INSIDE > PHP SCRIPT
    if (!isset($_SESSION['session_user_id']))
    {
      ?>
      <!-- This navbar appears only if the user is logged off -->
          <div class="gotrp_nav">
              <div class="gotrp_subnav">
                  <a href="index.php">Welcome to GOTRP</a>
                  <a href="account.php">Create account</a>
              </div>
              <div class=gotrp_subnav2_search>
                  <a>Search Function - To be implemented</a>
              </div>
          </div>
    <?php
    } else { 
    ?>
    <!-- This navbar appears only if the user is logged in -->
          <div class="navbar_grid">
              <div class="navbar_play_button"><a href="gotrp_client.php">Play</a></div>
          </div>
          <div class="gotrp_nav">
              <div class="gotrp_subnav">
                  <a href="index.php">Welcome, <?php echo $_SESSION['session_user_username'];?>  </a>
                  <a><?php include_once 'logout_button_function.php';?></a>
              </div>
              <div class=gotrp_subnav2_search>
                  <a>Search Function - To be implemented</a>
              </div>
          </div>
    <?php
    } 
  //* END NAVBAR HTML > INSIDE > PHP SCRIPT ?> 
  </div> <!-- END id asoiaf_navbar_first -->

  <div id="gameofthrones_nav_grid" class="container-fluid">
    <div id="nav_logo">GOT-RP</div>
    <div id="nav_home"><a class="gameofthrones_nav_fix1" href="index.php" title="Homepage">Home</a></div>
    <div id="nav_news"><a class="gameofthrones_nav_fix1" href="index.php" title="Go to News">News</a></div>
    <div id="nav_guide"><a class="gameofthrones_nav_fix1" href="index.php" title="Go to Guide">Guide</a></div>
    <div id="nav_media"><a class="gameofthrones_nav_fix1" href="index.php" title="Go to Media">Media</a></div>
    <div id="nav_forums"><a class="gameofthrones_nav_fix1" href="community.php" title="Go to Community">Community</a></div>
    <div id="nav_shop"><a class="gameofthrones_nav_fix1" href="index.php" title="Go to Shop">Shop</a></div>
  </div> <!-- END id gameofthrones_nav_grid  -->
</div> <!-- END id gameofthrones_wrapper -->