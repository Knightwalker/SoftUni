function main(args){
  let obj = {};

  for (let i = 0; i < args.length; i++) {
    let data = args[i].split(" -> ");
    let town = data[0];
    let product = data[1];
    let incomeArr = data[2].split(" : ");
    let income = incomeArr[0] * incomeArr[1];
    
    if(obj[town] == undefined){
      obj[town] = [];
      obj[town].push(
        {
          product: product,
          income: income
        }
      );

    } else {
      obj[town].push(
        {
          product: product,
          income: income
        }
      );
    }

  }

  for (const key in obj) {
    console.log(`Town - ${key}`);
    
    for (let i = 0; i < obj[key].length; i++) {
      let currentObj = obj[key][i];
      console.log(`$$$${currentObj.product} : ${currentObj.income}`);
    }

  }

}

main(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
);