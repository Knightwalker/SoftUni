function solve(...allParams) {
  let maxN = Math.max(...allParams);
  console.log(`The largest number is ${maxN}.`);
}

// function solve() {
//   let maxN = Math.max(...[...arguments]);
//   console.log(`The largest number is ${maxN}`);
// }

// solve(5, -3, 16);