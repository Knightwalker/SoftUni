function solve(inputArr) {

  let map = new Map();
  let neightborhoods = inputArr[0].split(", ");
  for (let neightborhood of neightborhoods) {
    map.set(neightborhood, []);
  }

  for (let i = 1; i < inputArr.length; i++) {
    let current = inputArr[i].split(" - ");
    let neightborhood = current[0];
    let person = current[1];
    if (neightborhoods.includes(neightborhood)) {
      map.get(neightborhood).push(person);
    }
  }

  let sorted = Array.from(map).sort(function(a, b) {
    if (a[1].length > b[1].length) {
      return -1;
    } else {
      return 1;
    }
  });

  for (let kvp of sorted) {
    console.log(`${kvp[0]}: ${kvp[1].length}`);
    
    for (let v of kvp[1]) {
      console.log(`--${v}`);
    }
  }

}

solve([
  'Abbey Street, Herald Street, Bright Mews',
  'Bright Mews - Garry',
  'Bright Mews - Andrea',
  'Invalid Street - Tommy',
  'Abbey Street - Billy'
]
);