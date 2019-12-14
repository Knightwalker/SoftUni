function solve(args) {
  let arr1 = args[0].split(" ").map(x => parseInt(x));
  let arr2 = args[1].split(" ").map(x => parseInt(x));

  for (let i = 2; i < args.length; i++) {
    let line = args[i];
    if (line == "nexus") { break; }
    //console.log(line);
    //console.log(arr1);
    //console.log(arr2);

    let connections = line.split("|");
    let connections1 = connections[0].split(":");
    let connections2 = connections[1].split(":");
    let x1 = connections1[0];
    let x2 = connections1[1];
    let x3 = connections2[0];
    let x4 = connections2[1];
    
    let firstConnection = isBetween(x3, x1, x2);
    let secondConnection = isBetween(x4, x1, x2);
    if (firstConnection || secondConnection) {
      let nexus = Number(arr1[x1] + arr1[x3] + arr2[x2] + arr2[x4]);
      arr1.splice(Math.min(x1, x3), (Math.max(x1, x3) - Math.min(x1, x3) + 1));
      arr2.splice(Math.min(x2, x4), (Math.max(x2, x4) - Math.min(x2, x4) + 1));
      for(let j = 0; j < arr1.length; j++) {
        arr1[j] += nexus;
      }
      for(let j = 0; j < arr2.length; j++) {
        arr2[j] += nexus;
      }
    }

    //console.log(arr1);
    //console.log(arr2);

  }

  console.log(arr1.join(", "));
  console.log(arr2.join(", "));

  function isBetween(n, a, b) {
    return (n - a) * (n - b) <= 0;
  }

}