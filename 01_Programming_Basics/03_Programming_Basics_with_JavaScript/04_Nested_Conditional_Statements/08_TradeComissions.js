function TradeComissions(args) {
  let town = args[0].toLowerCase();
  let quantity = parseFloat(args[1]);

  let comission = 0.0
  let validTown = false;
  let validQuantity = false;

  if (town == "sofia" || town == "varna" || town == "plovdiv") { validTown = true; }
  if (quantity >= 0) {validQuantity = true; }

  if (town == "sofia") {
    if (quantity >= 0 && quantity <= 500) {comission = quantity * 0.05;}
    else if (quantity > 500 && quantity <= 1000) {comission = quantity * 0.07;}
    else if (quantity > 1000 && quantity <= 10000) {comission = quantity * 0.08;}
    else if (quantity > 10000) {comission = quantity * 0.12;}
  } else if (town == "varna") {
    if (quantity >= 0 && quantity <= 500) {comission = quantity * 0.045;}
    else if (quantity > 500 && quantity <= 1000) {comission = quantity * 0.075;}
    else if (quantity > 1000 && quantity <= 10000) {comission = quantity * 0.10;}
    else if (quantity > 10000) {comission = quantity * 0.13;}
  } else if (town == "plovdiv") {
    if (quantity >= 0 && quantity <= 500) {comission = quantity * 0.055;}
    else if (quantity > 500 && quantity <= 1000) {comission = quantity * 0.08;}
    else if (quantity > 1000 && quantity <= 10000) {comission = quantity * 0.12;}
    else if (quantity > 10000) {comission = quantity * 0.145;}
  }

  if (validTown == true && validQuantity == true) { 
    console.log(comission.toFixed(2)); 
  } else {
    console.log("error");
  }

}