function SortArrayByCriteria(arr) {

  arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      if (a > b) { return 1; }
      if (a < b) { return -1; }
    }
  });

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

}

//SortArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);