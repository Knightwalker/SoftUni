function PopulationsInTowns(arr) {
  let country = {};
  
  for (let line of arr) {
    let tokens = line.split(" <-> ");
    let town = tokens[0];
    let population = tokens[1];

    if (!country[town]) {
      country[town] = 0;
    }
    country[town] += Number(population);

  }

  for (let town in country) {
    console.log(`${town} : ${country[town]}`);
  }

}

/*
PopulationsInTowns([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000"
]);
*/