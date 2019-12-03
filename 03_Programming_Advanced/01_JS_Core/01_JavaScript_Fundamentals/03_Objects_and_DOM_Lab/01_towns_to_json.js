function TownsToJSON(arr) {
  let towns = [];
  const regex = /\s*\|\s*/gm;

  for (let line of arr.splice(1)) {
    let tokens = line.split(regex);
    let townObj = { Town: tokens[1], Latitude: Number(Number(tokens[2]).toFixed(2)), Longitude: Number(Number(tokens[3]).toFixed(2)) };
    towns.push(townObj);
  }
  
  console.log(JSON.stringify(towns));

}

/*
TownsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
*/