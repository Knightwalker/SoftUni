function PersonalTitles(args) {
  let age = parseFloat(args[0]);
  let gender = args[1];
  let msg = '';

  if (gender == "m") {
    if (age >= 16) { msg = "Mr."; }
    else if (age >= 0 && age < 16) { msg = "Master"; }
  } else if (gender == "f") {
    if (age >= 16) { msg = "Ms."; }
    else if (age >= 0 && age < 16) { msg = "Miss"; }
  }

  console.log(msg);
}