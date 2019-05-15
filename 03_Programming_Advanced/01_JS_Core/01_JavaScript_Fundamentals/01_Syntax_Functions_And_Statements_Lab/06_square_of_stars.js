function SquareOfStars(n) {
  res = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += "*";
    }
    res += "\n";
  }

  console.log(res);
}

//SquareOfStars(6);