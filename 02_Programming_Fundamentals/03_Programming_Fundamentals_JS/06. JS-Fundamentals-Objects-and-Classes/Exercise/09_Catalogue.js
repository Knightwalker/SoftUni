function solve(args) {

  let catalogue = [];
  let sortedCatalogue = [];

  for (let i = 0; i < args.length; i++) {
    let input = args[i].split(" : ");
    let name = input[0];
    let value = parseFloat(input[1]);
    let initial = name[0];
    catalogue.push({initial, name, value}) 
  }

  catalogue.sort(function(a, b) {
    return a.initial.localeCompare(b.initial);
  });

  for (let i = 0; i < catalogue.length; i++) {
    let element = catalogue[i];

    if (!sortedCatalogue[element.initial]) {
      sortedCatalogue[element.initial] = [];
      newObj = {
        name: element.name,
        value: element.value
      }
      sortedCatalogue[element.initial].push(newObj);
    } else {
      newObj = {
        name: element.name,
        value: element.value
      }
      sortedCatalogue[element.initial].push(newObj);
    }

  }

  for (let key in sortedCatalogue) {
    let element = sortedCatalogue[key];
    element.sort(function(a, b){
      return a.name.localeCompare(b.name);
    });
    console.log(key);
    for (let i = 0; i < element.length; i++) {
      console.log("  " + element[i].name + ": " + element[i].value);
    }

  }

}

// solve([
//   'Appricot : 20.4',
//   'Fridge : 1500',
//   'TV : 1499',
//   'Deodorant : 10',
//   'Boiler : 300',
//   'Apple : 1.25',
//   'Anti-Bug Spray : 15',
//   'T-Shirt : 10'
// ]);