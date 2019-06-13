let solution = (function () {
  const add = function ([xA, yA], [xB, yB]) {
    return [xA + xB, yA + yB];
  }
  const multiply = function ([xA, xB], scalar) {
    return [ xA * scalar, xB * scalar];
  }
  const length = function ([xA, xB]) {
    return Math.sqrt(xA ** 2 + xB ** 2);
  }
  const dot = function ([xA, yA], [xB, yB]) {
    return xA * xB + yA * yB;
  }
  const cross = function ([xA, yA], [xB, yB]) {
    return xA * yB - xB * yA;
  }

  return {
    add,
    multiply,
    length,
    dot,
    cross
  }

})();

//console.log(solution.add([1, 1], [1, 0]));