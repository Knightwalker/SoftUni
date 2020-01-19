function main(arg1) {

  let res = 0;
  let inputType = typeof(arg1);
  
  if (inputType == "number") {
    res = Math.PI * arg1 * arg1;
    console.log(res.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  }

}