function NameWars(args) {
  let index = 0;
  let name = "";
  let winnerName = "";
  let biggestAsciiSum = 0;
  let asciiSum = 0;

  while (args[index] != "STOP") {
    name = args[index];
    index += 1;

    for (let splitNameByLetters of name) {
      asciiSum += splitNameByLetters.charCodeAt();

      if (biggestAsciiSum < asciiSum) {
        biggestAsciiSum = asciiSum;
        winnerName = name;
      }
    }

    asciiSum = 0;
  }

  console.log("Winner is " + winnerName + " - " + biggestAsciiSum + "!");
}