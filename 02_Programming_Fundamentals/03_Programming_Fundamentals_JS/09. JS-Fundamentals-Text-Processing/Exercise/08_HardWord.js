function solve(args) {

  let text = args[0];
  let words = args[1];

  while(text.includes("_")) {
    
    let startIndex = text.indexOf("_");
    let wordLenght = 0;

    while(text[startIndex + wordLenght] == "_") {
      wordLenght++;
    }
   
    for (let word of words) {
      if (word.length == wordLenght) {
        let template = "_".repeat(wordLenght);
        text = text.replace(template, word);
      }
    }

  }

  console.log(text);

}

solve([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  [
    'pie',
    'bring',
    'glad',
    'During',
    'amazing',
    'pharmacist',
    'sprained'
  ]
]
);