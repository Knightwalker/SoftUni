function Matrix(args) {

  let a = args[0];
  let b = args[1];
  let c = args[2];
  let d = args[3];
  
  let max = Math.max(a,b,c,d);

  let matrix = "";

  for (i = 1; i <= max; i++) {
    for (i2 = 1; i2 <= max; i2++) {
      for (i3 = 1; i3 <= max; i3++) {
        for (i4 = 1; i4 <= max; i4++) {

          if ((i >= a && i <= b) && (i2 >= a && i2 <= b)) {
            if ((i3 >= c && i3 <= d) && (i4 >= c && i4 <= d)) {
              if ((i != i2) && (i3 != i4)) {
                if ((i + i4) == (i2 + i3)) {
                  matrix += i + "" + i2 + "\n";
                  matrix += i3 + "" + i4 + "\n";
                  matrix += "\n";
                }
              }
            }
          }

        }
      }
    }
  }

  console.log(matrix);
}