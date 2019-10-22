function solve(args) {

  let data = [];

  for (let i = 0; i < args.length; i++) {
    let inputObj = JSON.parse(args[i]);
    let key = Object.keys(inputObj)[0];
    let val = Object.values(inputObj)[0];

    let index = data.findIndex(o => o.key == key);
    if (index == -1) {
      let newObj = {};
      newObj.key = key;
      newObj.val = val;
      data.push(newObj);
    } else {
      data[index].val = val;
    }
  }

  data.sort(function(a, b){
    if (a.key > b.key) {return 1; }
    else { return -1; }
  });

  for (let obj of data) {
    console.log(`Term: ${obj.key} => Definition: ${obj.val}`);
  }

}

// solve([
//   '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//   '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//   '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//   '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//   '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//   ]
// );