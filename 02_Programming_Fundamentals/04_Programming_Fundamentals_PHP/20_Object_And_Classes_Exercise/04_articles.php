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

$inputArr = explode(", ", readline());
$title = $inputArr[0];
$content = $inputArr[1];
$author = $inputArr[2];
$articles = new Article($title, $content, $author);

//var_dump($articles);

$n = readline();
for ($i = 0; $i < $n; $i++) {
  $inputArr = explode(": ", readline());
  $command = $inputArr[0];
  $placeholder = $inputArr[1];

  if ($command == "Edit") {
    $articles->editContent($placeholder);
  } else if ($command == "ChangeAuthor") {
    $articles->changeAuthor($placeholder);
  } else if ($command == "Rename") {
    $articles->renameTitle($placeholder);
  }

}

echo "{$articles->getTitle()} - {$articles->getContent()}: {$articles->getAuthor()}" . PHP_EOL;

?>