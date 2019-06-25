function solve(input) {

  let buildCarBuilder = (function() {
    let cars = {};
    
    return {
      create(name) {
        cars[name] = {};
      },
      inherit(name, parentName) {
        Object.setPrototypeOf(cars[name], cars[parentName]);
      },
      set(name, key, value) {
        cars[name][key] = value;
      },
      print(name) {
        let res = [];
        for (let key in cars[name]) {
          res.push(`${key}:${cars[name][key]}`);
        }
        console.log(res.join(', '));
      }
    }
    
  })();

  for (element of input) {
    let elementArr = element.split(" ");

    if (elementArr[0] == "create") {
      let name = elementArr[1];
      buildCarBuilder.create(name);

      if (elementArr[2] == "inherit") {
        let parentName = elementArr[3];
        buildCarBuilder.inherit(name, parentName);
      }

    } else if (elementArr[0] == "set") {
      let name = elementArr[1];
      let key = elementArr[2];
      let value = elementArr[3];
      buildCarBuilder.set(name, key, value);
    
    } else if (elementArr[0] == "print") {
      let name = elementArr[1];
      buildCarBuilder.print(name);
    }
  }
  
}

// solve(['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2']
// );
