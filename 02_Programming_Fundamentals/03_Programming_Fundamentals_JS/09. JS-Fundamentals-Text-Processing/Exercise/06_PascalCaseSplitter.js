function solve(text) {

  let textArr = [];
  let word = "";

  for (let i = 0; i < text.length; i++) {

    let c = text[i];
    if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
     
      if (i != 0) {
        textArr.push(word);
        word = "";
      }

      word += c;
    } else {
      word += c;
    }

    if (i == text.length - 1) {
      textArr.push(word);
    }

  }

  console.log(textArr.join(", "));

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');