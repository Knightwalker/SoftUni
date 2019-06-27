function solve() {
  let myObject = {
    __proto__: {},

    extend: function(template) {
      let propertyNamesArr = Object.getOwnPropertyNames(template); // returns array of all the property names of the template Object
      for(let propertyName of propertyNamesArr) {
        if (typeof(template[propertyName]) === 'function') {
          Object.setPrototypeOf(this, template)
        } else {
          this[propertyName] = template[propertyName];
        }
      }
    }

  };

  return myObject;
}

// let testObj = solve();
// let template = {
//   extensionMethod: function () {
//       console.log("From extension method");
//   }
// };
// testObj.extend(template);