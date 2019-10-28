function solve(inputArr) {
  let wordsArr = inputArr[0].split(" ");
  let map = new Map();
  for (let i = 0; i < wordsArr.length; i++) {
    map.set(wordsArr[i], 0);
  }

  for(let i = 1; i < inputArr.length; i++) {
    let word = inputArr[i]; 
    if (map.has(word)) {
      let val = map.get(word);
      val += 1;
      map.set(word, val);
    }
  }

  let sortedMap = Array.from(map).sort(function(a, b){
    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  });

  for (let word of sortedMap) {
    console.log(`${word[0]} - ${word[1]}`);
  }
  
}

solve([
  'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
  ,'words','this','and','sentence','because','this','is','your','task'
  ]
);