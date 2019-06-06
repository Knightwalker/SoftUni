function AutoService(inputArr) {
 
  let instructionsList = [];
  let partsList = {};

  for (let i = 0; i < inputArr.length; i++) {
    let currentInput = inputArr[i].split(" ");
    let command = currentInput[0];

    if (command == "instructions") {
      let model = currentInput[1];
      if (!instructionsList.includes(model)) {
        instructionsList.push(model);
      }
    } else if (command == "addPart") {
      let model = currentInput[1];
      let part = currentInput[2];
      let serialNumber = currentInput[3];
      if (!partsList[model]) {
        partsList[model] = {};
        partsList[model][part] = [];
        partsList[model][part].push(serialNumber);
      } else {
        if (!partsList[model][part]) {
          partsList[model][part] = [];
        }
        partsList[model][part].push(serialNumber);
      }
      
    // repair instruction
    } else if (command == "repair") {
      let model = currentInput[1];
      let check_model = true;
      let carObj = JSON.parse(currentInput[2]);

      // check if we have the model instruction, else skip
      if (!instructionsList.includes(model)) {
         check_model = false;
         console.log(model + " is not supported");
      }
      if (check_model == true) {
        //console.log("repair stats here ... ... ...");
        //console.log(`${model} repair - ${JSON.stringify(carObj)}`);
        //console.log(partsList);
        //console.log('\n');

        for (let parts in carObj) {
          let part = parts;
          let status = carObj[parts];

          if (status == "broken") {
            // check if we have the model and the part.
            if (partsList[model]) {
              if (partsList[model][part]) {
                let serialNumbersArr = partsList[model][part];
                // check if we have any avaliable parts. If we do, replace it.
                if (serialNumbersArr.length > 0) {
                  let currentSerialNumber = serialNumbersArr[0];
                  serialNumbersArr.shift();
                  carObj[parts] = currentSerialNumber;
                }
              }
            }
          }
        }

        console.log(`${model} client - ${JSON.stringify(carObj)}`);
        //console.log(carObj);
        //console.log(partsList);
        //console.log("repair ends here ... ... ...\n");
      }
    }

  }

  // finally print the avaliable parts sorted alphabetically by car model
  let sortedPartsArr = [];
  let keys = [];

  for (let model in partsList) {
    if (partsList.hasOwnProperty(model)) {
      keys.push(model);
    }
  }

  keys.sort();

  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    console.log(k + " - " + JSON.stringify(partsList[k]));
  }

}

//AutoService([
//    'repair mazda {"engine":"broken"}',
//    'instructions bmw',
//    'addPart opel engine GV1399SSS'
//]
//);

//AutoService([
//  'instructions bmw',    
//  'addPart opel engine GV1399SSS',
//  'addPart opel transmission SMF556SRG',
//  'addPart bmw engine GV1399SSS',   
//  'addPart bmw transmission SMF444ORG',
//  'addPart opel transmission SMF444ORG',
//  'instructions opel',
//  'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
//  'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
//]);