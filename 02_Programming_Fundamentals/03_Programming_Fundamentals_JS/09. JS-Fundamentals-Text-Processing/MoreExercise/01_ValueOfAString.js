function solve(args) {

  let text = args[0];
  let mode = args[1];
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    if (mode == "UPPERCASE") {
      if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
        sum += letter.charCodeAt(0);
      }
    } if (mode == "LOWERCASE") {
      if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        sum += letter.charCodeAt(0);
      }
    }

  }

  console.log(`The total sum is: ${sum}`);

}

solve([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]);