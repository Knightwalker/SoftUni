function main(args){
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    let data = args[i].split(" <-> ");
    let town = data[0];
    let population = Number(data[1]);

    if(obj[town] == undefined){
      obj[town] = population;
    }
    else{
      obj[town] += population;
    }
  }

  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}

main(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);