function solve(text) {

  let textArr = text.split(" ");
  for (let word of textArr) {
    if (word.startsWith("#") && word.length > 1) {

      newWord = word.replace("#", "");

      let validateWord = true;
      for (let c of newWord) {
        if(c.toLowerCase() != c.toUpperCase()) {
          // it's a letter
        }
        else {
          validateWord = false; // it's a symbol
          break;
        }
      }

      if (validateWord) {
        console.log(newWord);
      }

    }
  }

}

solve('Nowadays everyone uses # to tag a #spe23cial word in #socialMedia');