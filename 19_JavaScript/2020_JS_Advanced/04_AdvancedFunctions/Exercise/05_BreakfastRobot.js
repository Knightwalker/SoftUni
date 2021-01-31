function main() {
  return (function () {

    let storageObj = { 
      'protein': 0, 
      'carbohydrate': 0, 
      'fat': 0, 
      'flavour': 0 
    }

    const receiptObj = {
      'apple': { 'carbohydrate': 1, 'flavour': 2},
      'lemonade': { 'carbohydrate': 10, 'flavour': 20},
      'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3},
      'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1},
      'turkey': { 'protein': 10, 'carbohydrate':10, 'fat': 10, 'flavour': 10},
    };

    return function(input) {
      let commandArr = input.split(" ");
      let command = commandArr[0];

      if (command == "report") {
        return `protein=${storageObj['protein']} carbohydrate=${storageObj['carbohydrate']} fat=${storageObj['fat']} flavour=${storageObj['flavour']}`;

      } else if (command == "restock") {
        let microelement = commandArr[1];
        let quantity = Number(commandArr[2]);
        storageObj[microelement] += quantity;
        return "Success";

      } else if (command == "prepare") {
        let recipe = commandArr[1];
        let quantity = Number(commandArr[2]);

        for (let elements in receiptObj[recipe]) {
          if (storageObj[elements] < (receiptObj[recipe][elements] * quantity)) {
            return `Error: not enough ${elements} in stock`;
          }
        }

        for (let elements in receiptObj[recipe]) {
          storageObj[elements] -= receiptObj[recipe][elements] * quantity;
        }
        return "Success";

      }

    }
  })();
}