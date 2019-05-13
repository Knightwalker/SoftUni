function CatLife(args) {

let breed = args[0];
let sex = args[1];
let years = 0;
let breedValidator = false;

  if (sex == "m") {
    if (breed == "British Shorthair") { years = 13; }
    else if (breed == "Siamese") { years = 15; }
    else if (breed == "Persian") { years = 14; }
    else if (breed == "Ragdoll") { years = 16; }
    else if (breed == "American Shorthair") { years = 12; }
    else if (breed == "Siberian") { years = 11; }
    else { breedValidator = true;}
  } else if (sex == "f") {
    if (breed == "British Shorthair") { years = 14; }
    else if (breed == "Siamese") { years = 16; }
    else if (breed == "Persian") { years = 15; }
    else if (breed == "Ragdoll") { years = 17; }
    else if (breed == "American Shorthair") { years = 13; }
    else if (breed == "Siberian") { years = 12; }
    else { breedValidator = true;}
  }

  let res = (years * 12) / 6;

  if (breedValidator == true) {
    console.log(breed + " is invalid cat!")
  } else {
    console.log(res + " cat months");
  }
}

