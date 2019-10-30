function solve(args) {

  let days = parseInt(args[0]);
  let dailyPlunder = parseInt(args[1]);
  let expectedPlunder = parseFloat(args[2]);
  let totalPlunder = 0;

  for (let i = 1; i < days + 1; i++) {

    totalPlunder += dailyPlunder;
    if (i % 3 == 0) { totalPlunder += dailyPlunder / 2; }
    if (i % 5 == 0) {
      totalPlunder -= totalPlunder * 0.30;
    }

  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${((totalPlunder/expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
  }

}

//solve(['5', '40', '100' ]);
solve(["10", "20", "380"]);