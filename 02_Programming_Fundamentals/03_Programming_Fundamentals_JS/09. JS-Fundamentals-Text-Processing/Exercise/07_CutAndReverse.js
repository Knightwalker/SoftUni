function solve(string) {
      let firstWord = string.slice(0, string.length / 2)
      let secondWord = string.slice(string.length / 2, string.length)
      console.log(firstWord.split("").reverse().join(""))
      console.log(secondWord.split("").reverse().join(""))
} 