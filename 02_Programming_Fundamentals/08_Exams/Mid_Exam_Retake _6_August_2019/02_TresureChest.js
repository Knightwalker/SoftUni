function solve(args) {

  let tresureChest = args[0].split("|");

  for (let i = 1; i < args.length; i++) {
    if (args[i] == "Yohoho!") { break; }

    let inputArr = args[i].split(" ");

    if (inputArr[0] == "Loot") {

      for (let i = 1; i < inputArr.length; i++) {
        let item = inputArr[i];
        let index = tresureChest.findIndex(x => x == item);
        if (index < 0) {
          tresureChest.splice(0, 0, item);
        }

      }

      //console.log(tresureChest.join(" "));

    } else if (inputArr[0] == "Drop") {
      let index = parseInt(inputArr[1]);

      if (index >= 0 && index < tresureChest.length) {
        let el = tresureChest[index];
        tresureChest.splice(index, 1);
        tresureChest.push(el);
      }

    } else if (inputArr[0] == "Steal") {
      let count = parseInt(inputArr[1]);

      if (count > tresureChest.length) { 
        console.log(tresureChest.join(", "));
        tresureChest = [];
      } else {
        let stolenArr = [];
        for (let i = tresureChest.length - count; i < tresureChest.length; i++) {
          stolenArr.push(tresureChest[i]);
        }
        tresureChest.splice(tresureChest.length - count, count);
        console.log(stolenArr.join(", "));
      }

    } 

  }

  if (tresureChest.length > 0) {
    let sum = 0;
    for (let i = 0; i < tresureChest.length; i++) {
      sum += tresureChest[i].length;
    }
    console.log(`Average treasure gain: ${(sum / tresureChest.length).toFixed(2)} pirate credits.`);
  } else {
    console.log(`Failed treasure hunt.`);
  }

}

solve([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!'
]);