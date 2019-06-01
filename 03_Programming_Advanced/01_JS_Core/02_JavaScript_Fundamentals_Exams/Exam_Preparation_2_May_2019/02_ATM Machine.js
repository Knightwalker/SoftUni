function ATMMachine(nestedArr) {
  let totalCashInATM = 0;
  let banknotesArr = [];

  for (let i = 0; i < nestedArr.length; i++) {
    let currentArr = nestedArr[i];

    // inserting money
    if (currentArr.length > 2) {
      let insertedCash = 0;
      for (let j = 0; j < currentArr.length; j++) {
        insertedCash += Number(currentArr[j]);
        banknotesArr.push(Number(currentArr[j]));
      }
      totalCashInATM += insertedCash;
      console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
    }

    // withdraw money
    else if (currentArr.length == 2) {
      let accountBalance = currentArr[0];
      let withdrawAmount = currentArr[1];
      if (withdrawAmount > accountBalance) {
        console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
      } else if (withdrawAmount > totalCashInATM) {
        console.log(`ATM machine is out of order!`);
      } else {

        // sort the money in the ATM in desc mode
        banknotesArr.sort(function(a, b){
          if (a > b) {
            return -1;
          } else {
            return 1;
          }
        });

        //console.log(banknotesArr);

        totalCashInATM -= withdrawAmount;
        accountBalance -= withdrawAmount;
        let temp = withdrawAmount;
        for (let j = 0; j < banknotesArr.length; j++) {
          if (temp == 0) { break; }
          let currentBanknote = Number(banknotesArr[j]);

          //console.log("index " + j);
          //console.log("withdraw " + temp);
          //console.log("from " + currentBanknote);
          //console.log('-----');

          if (temp >= currentBanknote) {
            temp -= currentBanknote;
            banknotesArr.splice(j, 1);
            j--;
          }
        }

        //console.log(banknotesArr);
        //console.log(totalCashInATM);

        console.log(`You get ${withdrawAmount}$. Account balance: ${accountBalance}$. Thank you!`);

      }

    // generate report
    } else if (currentArr.length == 1) {
      let banknote = currentArr[0];
      let banknoteCount = 0;

      for (let j = 0; j < banknotesArr.length; j++) {
        if (banknote == banknotesArr[j]) {
          banknoteCount++;
        }
      }

      console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`);

    }

  }

}

//ATMMachine([
// [20, 5, 100, 20, 1],
// [457, 25],
// [1],
// [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
// [20, 85],
// [5000, 4500],
//]);