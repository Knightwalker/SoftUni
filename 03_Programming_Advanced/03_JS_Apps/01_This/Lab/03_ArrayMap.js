function solve(arr, func) {

  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  console.log(arr);
  return arr;

}

let arr = [1,2,3,4];
let func = (x)=>x*2;
let actual = solve(arr,func);