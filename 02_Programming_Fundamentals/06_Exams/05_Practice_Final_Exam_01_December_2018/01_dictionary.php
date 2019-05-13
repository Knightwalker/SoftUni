<?php

class DictionaryPair
{
  private $word;
  private $definitionsList = [];

  public function __construct($word) {
    $this->word = $word;
  }

  public function getWord() {
    return $this->word;
  }

  public function getDefinition() {
    return $this->definitionsList;
  }

  public function setWord($word) {
    $this->word = $word;
  }

  public function setDefinitionsList($definition) {
    $this->definitionsList[] = $definition;
  }

  public function sortDefinitionsDesc() {
    
    usort($this->definitionsList, function($a, $b) {
      if (strlen($a) > strlen($b)) {
        return -1;
      } else {
        return 1;
      }
    });
    
  }

}

$inputOne = readline();
$inputTwo = readline();
$inputThree = readline();

$word_definition = explode(" | ", $inputOne);
$wordsList = [];
foreach ($word_definition as $word) {
  $wordsList[] = explode(": ", $word);
}

$dictionary = [];
foreach ($wordsList as $pair) {
  $word = $pair[0];
  $definition = $pair[1];

  $containsWord = false;
  foreach ($dictionary as $values) {
    $currentWord = $values->getWord();

    if ($currentWord == $word) {
      $containsWord = true;
    }
  }

  if ($containsWord == false) {
    $pair = new DictionaryPair($word);
    $dictionary[] = $pair;
  }

  foreach ($dictionary as $values) {
    $currentWord = $values->getWord();
    if ($currentWord == $word) {
      $values->setDefinitionsList($definition);
    }
  }

}

// Sorting the Array
foreach ($dictionary as $values) {
  $values->sortDefinitionsDesc();
  //var_dump($values);
}

//var_dump($dictionary);

foreach ($dictionary as $values) {
  $values->sortDefinitionsDesc();
  //var_dump($values);
}

usort($dictionary, function($a, $b) {
  return strcmp($a->getWord(), $b->getWord());
});

if ($inputThree == "List") {

  foreach ($dictionary as $values) {
    echo $values->getWord() . " ";
  }

} else if ($inputThree == "End") {

  foreach ($dictionary as $values) {
    $currentWord = $values->getWord();

    $wordExists = false;
    $inputWords = explode(" | ", $inputTwo);
    foreach ($inputWords as $inputWord) {
      if ($inputWord == $currentWord) { $wordExists = true; }
    }

    if ($wordExists == true) {
      $currentDescriptions = $values->getDefinition();
      echo $currentWord . PHP_EOL;
      foreach ($currentDescriptions as $descriptions) {
        echo " -" . $descriptions . PHP_EOL;
      }
    }
  }

}

?>