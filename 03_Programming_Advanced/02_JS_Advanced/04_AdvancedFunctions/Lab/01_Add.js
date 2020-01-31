function exercise(number1) {

  return function(number2) {
    return number1 + number2;
  };

}

let add5 = exercise(5);
console.log(add5(5));