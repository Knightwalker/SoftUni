// variant 1
function sum(n) {
  var v = function(x) {
    return sum(n + x);
  };

  v.valueOf = v.toString = function() {
    return n;
  };

  return v;
}

// variant 2
function sum(n) {
  var v = function(x) {
    return sum(n + x);
  };

  v.valueOf = v.toString = function() {
    return n;
  };

  return v;
}