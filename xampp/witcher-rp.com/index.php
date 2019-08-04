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

<div id="nav_grid">
  <div id="nav_logo">LOGO</div>
  <div id="nav_right">
    <a href="/index.php">LOGO</a>
  </div>
  <div id="nav_left">
    <a href="/login.php">LOGIN</a>
    <a href="/register.php">CREATE ACCOUNT</a>
  </div>
</div>
   
<div id="master_grid">
  <div id="top">
    <nav id="nav_forum_grid">
      <div id="nav_right">
        <a href="/index.php">HOME</a>
      </div>
      <div id="nav_left">
        <a href="/login.php">LOGIN</a>
        <a href="/register.php">CREATE ACCOUNT</a>
      </div>
    </nav>
  </div>
  <div id="main"></div>
  <div id="right">
    <div class="right_head">Main Page</div>
    <div class="right_body"></div>
  </div>
</div>


<div id="footer"></div>



<script>

let categories = JSON.parse('<?php echo $categoriesAndForums;?>');
console.log(categories);

let fragment = document.createDocumentFragment();
for (let keys in categories) {
  let category = categories[keys];
  let title = category["category_title"];
  let view_mode = category["category_view_mode"];
  let forums = category["category_forums"];
  let forumsArr = Object.values(forums);
 
  let categoryEl = document.createElement("div");
    let categoryHeadEl = document.createElement("div"); categoryHeadEl.className = "category_head"; categoryHeadEl.textContent = title;
    let categoryBodyEl = document.createElement("div"); categoryBodyEl.className = "category_body";
    
    if (view_mode == "modern") {
      for (let i = 0; i < forumsArr.length; i+=2) {
        let forumOne = forumsArr[i];
        let forumTwo = forumsArr[i+1];

        let forumOne_forum_title = forumOne["forum_title"];
        let forumOne_description = forumOne["forum_description"];
        let forumOne_picture_id = forumOne["forum_picture_id"];
        console.log(forumOne_picture_id);

        let forumTwo_forum_title = forumTwo["forum_title"];
        let forumTwo_description = forumTwo["forum_description"];
        let forumTwo_picture_id = forumTwo["forum_picture_id"];

        let forumEl = document.createElement("div"); forumEl.className = "forum_modern_grid";
        forumEl.innerHTML = `<div class="forum_modern_subgrid1">status</div>`
                          + `<div class="forum_modern_subgrid2">`
                          +    `<div class="forum_modern_subgrid2_item1"><div id="${forumOne_picture_id}" class="roundstyle1"></div></div>`
                          +    `<div class="forum_modern_subgrid2_item2">`
                          +       `<div>${forumOne_forum_title}</div>`
                          +       `<div>${forumOne_description}</div>`
                          +    `</div>`
                          + `</div>`
                          + `<div class="forum_modern_subgrid3">`
                          +    `<div class="forum_modern_subgrid3_item1"><div id="${forumTwo_picture_id}" class="roundstyle1"></div></div>`
                          +    `<div class="forum_modern_subgrid3_item2">`
                          +       `<div>${forumTwo_forum_title}</div>`
                          +       `<div>${forumTwo_description}</div>`
                          +    `</div>`
                          + `</div>`
                          + `<div class="forum_modern_subgrid4">topics</div>`
                          + `<div class="forum_modern_subgrid5">posts</div>`
                          + `<div class="forum_modern_subgrid6">last post</div>`
                          ;
        categoryBodyEl.appendChild(forumEl);
      }
    }
    
    if (view_mode == "classic") {
      for (let keys2 in forums) {
      let forum = forums[keys2]
      let forum_title = forum["forum_title"];
      let forum_description = forum["forum_description"];

      let forumEl = document.createElement("div"); forumEl.className = "forum_classic_grid";
      forumEl.innerHTML = `<div>Status</div>`
                        + `<div>Picture</div>`
                        + `<div>`
                        +    `<div>${forum_title}</div>`  
                        +    `<div>${forum_description}</div>` 
                        + `</div>`
                        + `<div>Topics</div>`
                        + `<div>Posts</div>`
                        + `<div>Last Posts</div>`
                        ; 
      categoryBodyEl.appendChild(forumEl);
      } 
    }

  categoryEl.appendChild(categoryHeadEl);
  categoryEl.appendChild(categoryBodyEl);
  fragment.appendChild(categoryEl);
}
document.getElementById("main").appendChild(fragment);

</script>


</body>
</html>