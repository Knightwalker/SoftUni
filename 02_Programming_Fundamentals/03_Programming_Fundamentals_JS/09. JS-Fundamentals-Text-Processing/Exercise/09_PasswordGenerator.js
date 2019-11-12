function solve(arr) {
  let pass = arr[0] + arr[1];
  let replaceLetters = arr[2];
  let vowels = ["a", "o", "u", "e", "i"]
  let counter = 0
  pass = pass.split("")

  for (let i = 0; i < pass.length; i++) {
    if (vowels.includes(pass[i])) {
      pass[i] = replaceLetters[counter].toUpperCase();
      counter++;
      if (counter > replaceLetters.length - 1) {
        counter = 0;
      }
    }
  }

  pass = pass.reverse();
  console.log(`Your generated password is ${pass.join("")}`)

}