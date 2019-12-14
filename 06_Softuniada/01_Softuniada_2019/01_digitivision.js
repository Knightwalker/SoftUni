function solve(args) {
  let arr = [args[0], args[1], args[2]];
  let len = arr.length;
  let sum = Number(args[0]) + Number(args[1]) + Number(args[2])
  let digitivision = false;

  for (let i = 0; i < len; i++) {
    for (let i2 = 0; i2 < len; i2++) {
      if (i == i2) { continue; }
      for (let i3 = 0; i3 < len; i3++) {
        if (i2 == i3 || i == i3) { continue; }
        let currentNumber = Number(String(arr[i]) + String(arr[i2]) + String(arr[i3]));
        
		//console.log(currentNumber);
        if (currentNumber % sum == 0) {
          digitivision = true;
          break;
        }

      } 
    } 
  }

  if (digitivision) {
    console.log("Digitivision successful!");
  } else {
    console.log("No digitivision possible.");
  }

}

solve([6, 2, 1]);