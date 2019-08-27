function solve(inputN) {
  let n = Number(inputN);
  let height = n * 4 + 2;
  let width = n * 5;
  let figure = "";

  for (let head = 0; head < parseInt(n / 2); head++) {
    for (let spaces = 0; spaces < n; spaces++) { figure += " "; }
    for (let hashtags = 0; hashtags < width - 2 * n; hashtags++) { figure += "#"; }
    for (let spaces = 0; spaces < n; spaces++) { figure += " "; }
    figure += "\n";
  }

  for (let shoeMidStart = 0; shoeMidStart < 1; shoeMidStart++) {
    for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    for (let spaces = 0; spaces < width - 2 * n; spaces++) { figure += " "; }
    for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    figure += "\n";
  }

  for (let midHeight = 0; midHeight < height - 2 - (n + 2) - parseInt(n / 2) - parseInt(n / 2); midHeight++) {
    if (midHeight % 2 == 0) {    
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
      for (let spaces = 0; spaces < width - 2 * n; spaces++) { 
        if (spaces % 2 == 0) {
          figure += " "; 
        } else {
          figure += "#"; 
        }
      }
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    } else {
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
      figure += " "; 
      for (let spaces = 0; spaces < width - 2 - (2 * n); spaces++) { 
        if (spaces % 2 == 0) {
          figure += " "; 
        } else {
          figure += "#"; 
        }
      }
      figure += " "; 
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    }
    figure += "\n";
  }

  for (let shoeMidEnd = 0; shoeMidEnd < 1; shoeMidEnd++) {
    for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    for (let spaces = 0; spaces < width - 2 * n; spaces++) { figure += " "; }
    for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    figure += "\n";
  }

  for (let footHeight = 0; footHeight < n + 2; footHeight++) {
    if (footHeight % 2 == 0) {    
      for (let hashtags = 0; hashtags < width; hashtags++) { 
        figure += "#";
      }
    } else {
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
      for (let spaces = 0; spaces < width - (2 * n); spaces++) { 
        if (spaces % 2 == 0) {
          figure += " "; 
        } else {
          figure += "#"; 
        }
      }
      for (let hashtags = 0; hashtags < n; hashtags++) { figure += "#"; }
    }
    figure += "\n";
  }

  for (let head2 = 0; head2 < parseInt(n / 2); head2++) {
    for (let spaces = 0; spaces < n; spaces++) { figure += " "; }
    for (let hashtags = 0; hashtags < width - 2 * n; hashtags++) { figure += "#"; }
    for (let spaces = 0; spaces < n; spaces++) { figure += " "; }
    figure += "\n";
  }

  console.log(figure);

}

// solve(5);