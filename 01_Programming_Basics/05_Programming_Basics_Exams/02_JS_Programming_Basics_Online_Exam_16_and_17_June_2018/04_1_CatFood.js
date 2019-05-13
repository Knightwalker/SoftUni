function CatFood(args) {

let n = Number(args[0]);
let food = 0;
let sumFood = 0;
let groupOne = 0;
let groupTwo = 0;
let groupThree = 0;

  for (i = 1; i <= n; i++) {
    food = Number(args[i]);
    sumFood += food;

    if (food >= 0 && food < 200) { groupOne++; }
    else if (food >= 200 && food < 300) { groupTwo++; }
    else if (food >= 300 && food < 400) { groupThree++; }
  }

let res = (sumFood / 1000) * 12.45;

console.log("Group 1: " + groupOne + " cats.");
console.log("Group 2: " + groupTwo + " cats.");
console.log("Group 3: " + groupThree + " cats.");
console.log("Price for food per day: " + res.toFixed(2) + " lv.");
}

