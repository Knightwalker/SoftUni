function solve(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] == string[i + 1]) {
      string = string.slice(0, i) + string.slice(i + 1);
      i--
    }
  }
  console.log(string)
}

solve('qqqwerqwecccwd');