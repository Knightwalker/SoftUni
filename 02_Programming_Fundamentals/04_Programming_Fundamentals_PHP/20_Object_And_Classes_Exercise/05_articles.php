<?php

class Article
{
  private $title;
  private $content;
  private $author;

  public function __construct($title, $content, $author)
  {
    $this->title = $title;
    $this->content = $content;
    $this->author = $author;
  }

  public function getTitle()
  {
    return $this->title;
  }

  public function getContent()
  {
    return $this->content;
  }

  public function getAuthor()
  {
    return $this->author;
  }

  public function renameTitle($newTitle)
  {
    $this->title = $newTitle;
  }

  public function editContent($newContent)
  {
    $this->content = $newContent;
  }

  public function changeAuthor($newAuthor)
  {
    $this->author = $newAuthor;
  }

}

$articlesList = [];
$n = readline();
for ($i = 0; $i < $n; $i++) {
  $inputArr = explode(", ", readline());
  $title = $inputArr[0];
  $content = $inputArr[1];
  $author = $inputArr[2];
  $article = new Article($title, $content, $author);  
  $articlesList[] = $article;
}
$filterAlphabeticalyBy = readline();

// sorts array alphabetically by value or property
if ($filterAlphabeticalyBy == "title") {
  usort($articlesList, function($a, $b) {
    return strcmp($a->getTitle(), $b->getTitle()); 
  });  
} else if ($filterAlphabeticalyBy == "content") {
  usort($articlesList, function($a, $b) {
    return strcmp($a->getContent(), $b->getContent()); 
  });  
} else if ($filterAlphabeticalyBy == "author") {
  usort($articlesList, function($a, $b) {
    return strcmp($a->getAuthor(), $b->getAuthor()); 
  });  
}

foreach ($articlesList as $articles) {
  echo "{$articles->getTitle()} - {$articles->getContent()}: {$articles->getAuthor()}" . PHP_EOL;
}

?>