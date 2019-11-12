function solve(word, text) {
  let textArr = text.split(" ");

  let wordFound = false;
  for (let currentWord of textArr) {

    if (currentWord.toLowerCase() == (word.toLowerCase())) {
      wordFound = true;
      break;
    }

  }

  if (wordFound) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }

}

solve(
  'javascript',
  'JavaScript is the JavaScript JavaScript JavaScript best programming language'
);