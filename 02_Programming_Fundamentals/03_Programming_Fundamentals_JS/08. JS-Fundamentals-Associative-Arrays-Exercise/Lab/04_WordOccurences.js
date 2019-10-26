function solve(inputArr) {

  let map = new Map();

  for (let input of inputArr){ 
    if (!map.has(input)) {
      map.set(input, 1);
    } else {
      let currentInput = map.get(input);
      currentInput++;
      map.set(input, currentInput);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }

}

solve([
  'Here',     'is',
  'the',      'first',
  'sentence', 'Here',
  'is',       'another',
  'sentence', 'And',
  'finally',  'the',
  'third',    'sentence'
]
);