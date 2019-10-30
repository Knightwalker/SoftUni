function solve(args) {

  let pirateShip = args[0].split(">").map(x => Number(x));
  let warShip = args[1].split(">").map(x => Number(x));
  let health = Number(args[2]);
  let stalemate = true;

  for (let i = 2; i < args.length; i++) {
    let inputArr = args[i].split(" ");

    if (inputArr[0] == "Fire") {
      let index = Number(inputArr[1]);
      let damage = Number(inputArr[2]);

      if (index >= 0 && index < warShip.length) {
        if (warShip[index] - damage <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          stalemate = false;
          break;
        } else {
          warShip[index] -= damage;
        }
      }

    } else if (inputArr[0] == "Defend") {
      let startIndex = Number(inputArr[1]);
      let endIndex = Number(inputArr[2]);
      let damage = Number(inputArr[3]);

      if (startIndex >= 0 && startIndex < warShip.length) {
        if (endIndex >= 0 && endIndex < warShip.length) {

          for (let i = startIndex; i <= endIndex; i++) {
            if (warShip[i] - damage <= 0) {
              console.log(`You lost! The pirate ship has sunken.`);
              stalemate = false;
              break;
            } else {
              warShip[i] -= damage;
            }
          }

        }
      }

    }

  }

  if (stalemate) {
    pirateShipSum = 0;
    warsShipSum = 0;
    for (let i = 0; i < pirateShip; i++) {
      pirateShipSum += pirateShip[i];
    }
    for (let i = 0; i < warShip; i++) {
      warsShipSum += warShip[i];
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warsShipSum}`);
  }

}

solve([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire'
]);