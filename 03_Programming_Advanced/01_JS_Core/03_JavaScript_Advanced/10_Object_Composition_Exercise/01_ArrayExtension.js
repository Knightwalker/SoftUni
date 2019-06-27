(function solve() {

  Array["prototype"]["last"] = function() { 
    return this[this.length - 1]; 
  }
  
  Array["prototype"]["skip"] = function(n) { 
    let res = [];
    for (let i = n; i < this.length; i++) {
      res.push(this[i]);
    }
    return res;
  }
  
  Array["prototype"]["take"] = function(n) { 
    let res = [];
    for (let i = 0; i < n; i++) {
      res.push(this[i]);
    }
    return res;
  }
  
  Array["prototype"]["sum"] = function() { 
    let res = 0;
    for (let i = 0; i < this.length; i++) {
      res += this[i];
    }
    return res;
  }
  
  Array["prototype"]["average"] = function() { 
    let res = 0;
    for (let i = 0; i < this.length; i++) {
      res += this[i];
    }
    return res / this.length;
  }

})();