function solve(args) {

  let map = new Map();

  for (let input of args) {
    let inputArr = input.split(' ');
    let key = inputArr[0];
    let val = Number(inputArr[1]);

    if (!map.has(key)) {
      map.set(key, val);
    } else {
      let currentVal = map.get(key);
      let newVal = currentVal + val;
      map.set(key, newVal);
    }
    
  }

  for (let kvp of map) {
    console.log(kvp[0] + " -> " + kvp[1]);
  }

}

solve(['tomatoes 10',
 'coffee 5',
 'olives 100',
 'coffee 40']
);