function solve(inputArr) {

  let set = new Set();

  for (let i = 0; i < inputArr.length; i++) {
    let tokens = inputArr[i].split(", ");
    let direction = tokens[0];
    let number = tokens[1];

    if (direction == "IN") {
      set.add(number);
    } else if (direction == "OUT") {
      if (set.has(number)) {
        set.delete(number);
      }
    }

  }

  let sortedSet = Array.from(set).sort((a, b) => a.localeCompare(b));

  for (let key of sortedSet) {
    console.log(key);
  }

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);