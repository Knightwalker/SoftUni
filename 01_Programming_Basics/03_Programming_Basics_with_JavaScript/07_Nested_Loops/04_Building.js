function Building(args) {

let floors = Number(args[0]);
let rooms = Number(args[1]);

let building = "";

  for (i = 0; i < rooms; i++) {
    building += "L" + floors + i + " ";
  }

  building += "\n";

  for (i = floors - 1; i >= 1; i--) {   
    for (i2 = 0; i2 < rooms; i2++) {
      if (i % 2 == 0) {
        building += "O" + i + i2 + " ";
      } else {
        building += "A" + i + i2 + " ";
      }
    }
    
    building += "\n";
  }

  console.log(building);
}