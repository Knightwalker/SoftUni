function Aggregates(arr) {

  let sum = arr.reduce((a, b) => a + b);
  let min = arr.reduce((a, b) => Math.min(a, b));
  let max = arr.reduce((a, b) => Math.max(a, b));
  let product = arr.reduce((a, b) => a * b);
  let join = arr.reduce((a, b) => String(a) + String(b));

  console.log(`Sum = ${sum}`);
  console.log(`Min = ${min}`);
  console.log(`Max = ${max}`);
  console.log(`Product = ${product}`);
  console.log(`Join = ${join}`);

}

//Aggregates([2, 3, 10, 5]);
//Aggregates([5, -3, 20, 7, 0.5]);