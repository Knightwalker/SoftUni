function Travelling(args) {

let destinationName = "";
let destinationCost = 0;
let i = 0;

  while(true) {
    let money = 0;

    if (args[i] == "End") {break;}

    destinationName = args[i];
    i += 1;
    destinationCost = args[i];
    i += 1;

    while(money < destinationCost) {
      money += Number(args[i]);
      i += 1;
    }

    console.log("Going to " + destinationName + "!");
    
  }
}