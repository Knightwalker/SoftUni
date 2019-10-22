function solve(args) {

  let heroesDict = [];
  for (let i = 0; i < args.length; i++) {
    let input = args[i].split(" / ");
    let heroName = input[0];
    let heroLevel = parseInt(input[1]);
    let heroItems = input[2].split(", ");

    let heroObj = {};
    heroObj.name = heroName;
    heroObj.level = heroLevel;
    heroObj.items = heroItems;
    heroesDict.push(heroObj);
  }

  heroesDict.sort(function(a, b){
    if (a.level > b.level) {
      return 1;
    } else {
      return -1;
    }
  })

  for(let hero of heroesDict) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);

    hero.items.sort(function(a, b){
      if (a > b) { return 1; }
      else { return -1; }
    });

    console.log(`items => ${hero.items.join(", ")}`);
  }

}

// solve([
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
//   "Isacc / 25 / Apple, GravityGun"
//   ]
// );