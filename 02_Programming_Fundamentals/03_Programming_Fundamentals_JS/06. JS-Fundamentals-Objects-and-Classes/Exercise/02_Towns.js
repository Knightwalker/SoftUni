function solve(args) {

  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = parseFloat(latitude).toFixed(2);
      this.longitude = parseFloat(longitude).toFixed(2);
    }
  }

  let townsList = [];
  for (let index = 0; index < args.length; index++) {
    const elements = args[index].split(" | ");
    
    let town = new Town(elements[0], elements[1], elements[2]); 
    townsList.push(town);
  }

  for (let town of townsList) {
    let [townName, lat, long] = Object.values(town); 
      console.log(`{ town: '${townName}', latitude: '${lat}', longitude: '${long}' }`);   
  }

}

// solve(
//   ['Sofia | 42.696552 | 23.32601',
//   'Beijing | 39.913818 | 116.363625']
// );