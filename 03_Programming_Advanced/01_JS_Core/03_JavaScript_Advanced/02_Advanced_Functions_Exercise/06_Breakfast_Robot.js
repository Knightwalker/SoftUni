let manager = (function () {

  const receiptObj = {
    'apple': { 'carbohydrate': 1, 'flavour': 2},
    'lemonade': { 'carbohydrate': 10, 'flavour': 20},
    'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3},
    'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1},
    'turkey': { 'protein': 10, 'carbohydrate':10, 'fat': 10, 'flavour': 10},
  };

  let storageObj = { 'protein': 0, 'carbohydrate': 0, 'fat': 0, 'flavour': 0 }

  return function(input) {
    let commandArr = input.split(" ");
    let command = commandArr[0];

    if (command == "report") {
      console.log(`protein=${storageObj['protein']} carbohydrate=${storageObj['carbohydrate']} fat=${storageObj['fat']} flavour=${storageObj['flavour']}`);

    } else if (command == "restock") {
      let microelement = commandArr[1];
      let quantity = Number(commandArr[2]);
      storageObj[microelement] += quantity;
      console.log("Success");

    } else if (command == "prepare") {
      let recipe = commandArr[1];
      let quantity = Number(commandArr[2]);
      let checker = true;

      for (let elements in receiptObj[recipe]) {
        //console.log(`current receipt ${elements} needs = ${receiptObj[recipe][elements]}`);
        //console.log(`current stock = ${storageObj[elements]}`);
        if (storageObj[elements] < (receiptObj[recipe][elements] * quantity)) {
          console.log(`Error: not enough ${elements} in stock`);
          checker = false;
          break;
        }
      }
      if (checker) {
        for (let elements in receiptObj[recipe]) {
          storageObj[elements] -= receiptObj[recipe][elements] * quantity;
        }
        console.log("Success");
      }

    }

  }

})();

//Zero test #1
//manager("restock carbohydrate 10");
//manager("restock flavour 10");
//manager("prepare apple 1");
//manager("restock fat 10");
//manager("prepare burger 1");
//manager("report");

//Zero test #2
//manager("prepare turkey 1");
//manager("restock protein 10");
//manager("prepare turkey 1");
//manager("restock carbohydrate 10");
//manager("prepare turkey 1");
//manager("restock fat 10");
//manager("prepare turkey 1");
//manager("restock flavour 10");
//manager("prepare turkey 1");
//manager("report");

//Test #5
//manager("restock protein 100");
//manager("restock carbohydrate 100");
//manager("restock fat 100");
//manager("restock flavour 100");
//manager("report");
//manager("prepare lemonade 2");
//manager("report");
//manager("prepare lemonade 1");
//manager("report");

//Test #5 Expectation
//['restock protein 100', 'Success'],
//['restock carbohydrate 100', 'Success'],
//['restock fat 100', 'Success'],
//['restock flavour 100', 'Success'],
//['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
//['prepare lemonade 2', 'Success'],
//['report', 'protein=100 carbohydrate=80 fat=100 flavour=60'],
//['prepare lemonade 1', 'Success'],
//['report', 'protein=100 carbohydrate=70 fat=100 flavour=40']