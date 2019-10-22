function solve(args) {

  let registerDict = [];

  for (let i = 0; i < args.length; i++) {
    let [system, component, subcomponent] = args[i].split(" | ");
    
    let index = registerDict.findIndex(x => x.key == system);
    // IF the system does not exist
    if (index == -1) {
      let systemObj = {
        key: system,
        val: [
          {
            key: component,
            val: [
              subcomponent
            ]
          }
        ]
      }
      registerDict.push(systemObj);

    // IF the system exist
    } else {
      let index2 = registerDict[index].val.findIndex(x => x.key == component);

      // IF the component does not exist
      if (index2 == -1) {
        let componentObj = {
          key: component,
          val: [subcomponent]
        }
        registerDict[index].val.push(componentObj);

      // IF the component exist
      } else {
        registerDict[index].val[index2].val.push(subcomponent);
      }

    }

  } // END For...loop

  // sort
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  registerDict.sort(function(a, b){

    if (a.val.reduce(reducer) > b.val.reduce(reducer)) {
      return -1;
    } else if (a.val.reduce(reducer) > b.val.reduce(reducer)) {
      return 1;
    } else {
      return a.key.localeCompare(b.key);
    }

  });

  // print
  for (let system of registerDict) {
    console.log(system.key);

    // inner sort
    system.val.sort(function(a, b){
      if (a.val.reduce(reducer) > b.val.reduce(reducer)) {
        return -1;
      } else if (a.val.reduce(reducer) > b.val.reduce(reducer)) {
        return 1;
      }
    });

    for (let component of system.val) {
      console.log("|||" + component.key);

      for (let subcomponent of component.val) {
        console.log("||||||" + subcomponent);    
  
      } 
    }

  }

}

solve([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security'
]
);