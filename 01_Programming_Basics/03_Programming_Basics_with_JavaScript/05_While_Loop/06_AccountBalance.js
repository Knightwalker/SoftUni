function AccountBalance(args) {
  let contributions = parseInt(args[0]);
  let i = 1;
  let input = parseFloat(args[i]);
  let balance = 0;

  while(i <= contributions) {

    balance += input;
    console.log("Your account balance was increased by: " + input.toFixed(2))
    i++;
    input = parseFloat(args[i]);
   
    if (input <= 0) {
      console.log("Invalid operation!")
      break;
    }
    
  }

  console.log("Total balance: " + balance.toFixed(2));
}