function CircleArea(arg1) {
  let input = typeof(arg1);

  if (input == "number") {
    let res = Math.pow(Number(arg1), 2) * Math.PI;
    console.log(res.toFixed(2));
  } else {
    console.log("We can not calculate the circle area, because we receive a " + input + ".");
  }

}

//CircleArea(5);
//CircleArea('name');