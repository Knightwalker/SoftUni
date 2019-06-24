(function() {
  let id = 0;
  
  return class Extensible {
    constructor() {
      this.id = id++;
    }
  }

})()