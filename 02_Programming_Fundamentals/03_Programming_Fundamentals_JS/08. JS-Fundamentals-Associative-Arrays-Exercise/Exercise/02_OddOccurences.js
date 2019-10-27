function solve(input) {
  let inputArr = input.split(" ").map(x => x.toLowerCase());
  let map = new Map();

  for (let i = 0; i < inputArr.length; i++) {
    if (!map.has(inputArr[i])) {
      map.set(inputArr[i], 1);
    } else {
      let val = map.get(inputArr[i]);
      val += 1;
      map.set(inputArr[i], val);
    }
  }

  let resultStr = "";
  for (let kvp of map) {
    if (kvp[1] % 2 != 0) {
      resultStr += kvp[0] + " ";
    }
  }

  console.log(resultStr);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');