function solve(param) {
  let bValidInput = false;

  if (typeof param === "number") {
    bValidInput = true;
  } else {
    bValidInput = false;
  }

  if (bValidInput === true) {
    let area = Math.PI * Math.pow(paramm, 2);
    console.log(area.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
  }

}

// solve(5);
// solve("name");