<?php

$DB_Host = "localhost"; // Host, Server Name, etc
$DB_Username = "root";
$DB_Password = "";
$DB_Name = "loginsystem";

$conn = mysqli_connect($DB_Host, $DB_Username, $DB_Password, $DB_Name);

// SET DSN
$dsn = 'mysql:host=' . $DB_Host . ';dbname=' . $DB_Name;

// Create a PDO instance
$db = new PDO($dsn, $DB_Username, $DB_Password);

class Forum {

  private $db;

  function __construct($db) {		
    $this->db = $db;		
  }	

  function getCategories() {
    $sql = "SELECT * FROM `categories`";
    $stmt = $this->db->prepare($sql);
    $stmt->execute();
  
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $resultCount = $stmt->rowCount();

    //return $result;
    return json_encode($result);
  }

  function getCategoriesAndForums() {
    $resultArr = [];

    // STEP 1. Get Categories
    $sql = "SELECT * FROM `categories`";
    $stmt = $this->db->prepare($sql);
    $stmt->execute();

    while($category = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $category_id = $category["category_id"];
      $category_title = $category["category_title"];
      $category_position = $category["category_position"];
      $category_relation_id = $category["category_relation_id"];
      $category_view_mode = $category["category_view_mode"];

      $resultArr[$category_id] = [];
      $resultArr[$category_id]["category_title"] = $category_title;
      $resultArr[$category_id]["category_position"] = $category_position;
      $resultArr[$category_id]["category_relation_id"] = $category_relation_id;
      $resultArr[$category_id]["category_view_mode"] = $category_view_mode;
      $resultArr[$category_id]["category_forums"] = [];
          
      // STEP 2. Get Forums Related to a Category
      $sql = "SELECT * FROM `forums` WHERE `forum_relation_id` = $category_relation_id";
      $stmt2 = $this->db->prepare($sql);
      $stmt2->execute();

      while($forum = $stmt2->fetch(PDO::FETCH_ASSOC)) {
        $forum_id = $forum["forum_id"];
        $forum_title = $forum["forum_title"];
        $forum_description = $forum["forum_description"];
        $forum_picture_id = $forum["forum_picture_id"];
        $forum_position = $forum["forum_position"];
        $forum_relation_id = $forum["forum_relation_id"];

        $resultArr[$category_id]["category_forums"][$forum_id] = [];
        $resultArr[$category_id]["category_forums"][$forum_id]["forum_title"] = $forum_title;
        $resultArr[$category_id]["category_forums"][$forum_id]["forum_description"] = $forum_description;
        $resultArr[$category_id]["category_forums"][$forum_id]["forum_picture_id"] = $forum_picture_id;
        $resultArr[$category_id]["category_forums"][$forum_id]["forum_position"] = $forum_position;
        $resultArr[$category_id]["category_forums"][$forum_id]["forum_relation_id"] = $forum_relation_id;
     
      }

    }

    return json_encode($resultArr);

  }

} 

$forum = new Forum($db);
$categories = $forum->getCategories();
$categoriesAndForums = $forum->getCategoriesAndForums();

// echo "<pre>";
// var_dump($categoriesAndForums);
// echo "</pre>";