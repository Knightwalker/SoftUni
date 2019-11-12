function solve(words, text) {

  let wordsArr = words.split(", ");
  let textArr = text.split(" ");

  for (let i = 0; i < textArr.length; i++) {
    for (let currentWord of wordsArr) {
      let searchedTemplate = '*'.repeat(currentWord.length);
      if (textArr[i] == searchedTemplate) {
        textArr[i] = currentWord;
      }
    }
  }
  
  console.log(textArr.join(" "));

}

// solve(
//   'great',
//   'softuni is ***** place for learning new programming languages'
// );

solve(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);