function solve(n) {
  if (typeof n === "undefined") {
    var n = 5;
  }

  var figure = [];
  for (i = 1; i <= n; i++) {
    line = "* ".repeat(n);
    line = line.trim();
    figure.push(line);
  }

  let result = figure.join("\r\n");
  console.log(result);

}

// solve(1);
// solve(2);
// solve(5);