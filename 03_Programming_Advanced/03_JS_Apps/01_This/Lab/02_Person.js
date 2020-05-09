function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, "fullName", {
      set: function(value) {
        let data = value.split(" ");
        
        if(data[1] != undefined) {
          this.firstName = data[0];
          this.lastName = data[1];
        }
      },
      get: function() { 
        return this.firstName + " " + this.lastName;
      } 
    }
  );
}