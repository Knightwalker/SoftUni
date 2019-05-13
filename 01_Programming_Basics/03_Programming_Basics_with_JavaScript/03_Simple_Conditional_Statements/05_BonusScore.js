function BonusScore(args) {
  let n = parseFloat(args[0]);
  let bonus1 = 0;
  let bonus2 = 0;
  let bonus3 = 0;
  let totalPoints = 0;

  if (n >= 0 && n <= 100) { bonus1 = 5; }
  else if (n > 100 && n <= 1000) { bonus1 = n * 0.2; }
  else if (n > 1000) { bonus1 = n * 0.1; }

  if (n % 2 == 0) { bonus2 = 1;}

  if (n % 10 == 5) { bonus3 = 2;}

  totalPoints = bonus1 + bonus2 + bonus3;
  console.log(totalPoints);
  console.log(n + totalPoints);
}