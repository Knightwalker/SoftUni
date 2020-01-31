function result(arr, method) {

  if (method == "asc") {
    arr.sort(function(a, b){
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    })
  } else if (method == "desc") {
      arr.sort(function(a, b){
        if (a > b) {
          return -1;
        } else if (a < b) {
          return 1;
        }
      })
  }

  return arr;

}

var inputArray = [3, 1, 2, 10];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);