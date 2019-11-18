function solve(inputArr) {

  let racersArr = inputArr.shift().split(", ");
  const patternLetters = /[A-Za-z]/g;
  const patternNumbers = /[0-9]/g;

  let racersDict = new Map();
  for (let element of racersArr) {
    racersDict.set(element, 0);
  }


  for (let element of inputArr) {
    if (element == "end of race") { break; }

    let name = "";
    let distance = 0;

    // match all letters, concatenate to a name
    while ((m = patternLetters.exec(element)) !== null) {
      if (m.index === patternLetters.lastIndex) { patternLetters.lastIndex++; }
      name += m[0];
    }

    // match all numbers, add them to a distance
    while ((m = patternNumbers.exec(element)) !== null) {
      if (m.index === patternNumbers.lastIndex) { patternNumbers.lastIndex++; }
      distance += Number(m[0]);
    }

    if (racersDict.has(name)) {
      let oldDistance = racersDict.get(name);
      distance += oldDistance;
      racersDict.set(name, distance);
      //console.log(racersDict.get(name));
    }

    //console.log(name);
    //console.log(distance);

  }

  racersDict[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
  }

  console.log(`1st place: ${racersDict[0]}`);
  console.log(`2nd place: ${racersDict[1]}`);
  console.log(`3rd place: ${racersDict[2]}`);

}

solve([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'
]);