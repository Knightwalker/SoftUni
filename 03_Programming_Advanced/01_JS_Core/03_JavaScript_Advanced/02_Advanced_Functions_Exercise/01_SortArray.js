function SortArr(arr, mode) {

  if (mode == "asc") {
    // ES5 Syntax
    arr.sort(function(a, b) {
      if (a > b) { return 1; }
      else if (a < b) { return -1; }
    });

    // ES6 Syntx + ternary operator
  } else if (mode == "desc") {
    arr.sort((a, b) => a > b ? -1 : 1);
  }

  console.log(`[${arr.join(", ")}]`);

}

//SortArr([14, 7, 17, 6, 8], 'asc');
//SortArr([14, 7, 17, 6, 8], 'desc');