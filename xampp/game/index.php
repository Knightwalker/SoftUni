<?php
session_start();
include "core/database.php";
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
    <div class="category_head">Example Category</div>
    <div class="category_body"></div>
    <?php var_dump($categories); ?>
  </div>
  <div id="right">
    <div class="right_head">Main Page</div>
    <div class="right_body"></div>
  </div>
</div>


<div id="footer"></div>



<script>

let categories = JSON.parse('<?php echo $categoriesAndForums;?>');
let fragment = document.createDocumentFragment();

console.log(categories);

for (let keys in categories) {
  let category = categories[keys];
  let title = category["category_title"];
  let forums = category["category_forums"]

  let categoryEl = document.createElement("div");
    let categoryHeadEl = document.createElement("div"); categoryHeadEl.className = "category_head";
    let categoryForumsEl = document.createElement("div"); categoryForumsEl.className = "category_forums";
    categoryHeadEl.textContent = title;
    
    for (let keys2 in forums) {
      let forum = forums[keys2]
      let forum_title = forum["forum_title"];
      let forum_description = forum["forum_description"];

      let forumEl = document.createElement("div");
        forumEl.innerHTML = `<div>${forum_title}</div>`; 
      categoryForumsEl.appendChild(forumEl);
    }

  categoryEl.appendChild(categoryHeadEl);
  categoryEl.appendChild(categoryForumsEl);
  fragment.appendChild(categoryEl);
}
document.getElementById("main").appendChild(fragment);

</script>


</body>
</html>