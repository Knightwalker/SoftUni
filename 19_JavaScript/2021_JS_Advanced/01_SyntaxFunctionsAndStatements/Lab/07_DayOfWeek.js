function solve(input) {

  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  if (daysOfWeek[input.toLowerCase()]) {
    console.log(daysOfWeek[input.toLowerCase()]);
  } else {
    console.log("error");
  }

}

// solve("Monday");
// solve("Friday");
// solve("Invalid");