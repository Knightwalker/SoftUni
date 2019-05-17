function RoadRadar(args) {
  let speed = args[0];
  let area = args[1];
  let msg = "";

  if (area == "city") {
    if (speed >= 0 && speed <= 50) { msg = ""; }
    else if (speed > 50 && speed <= 70) { msg = "speeding"; }
    else if (speed > 70 && speed <= 90) { msg = "excessive speeding"; }
    else { msg = "reckless driving"; }
  } else if (area == "residential") {
    if (speed >= 0 && speed <= 20) { msg = ""; }
    else if (speed > 20 && speed <= 40) { msg = "speeding"; }
    else if (speed > 40 && speed <= 60) { msg = "excessive speeding"; }
    else { msg = "reckless driving"; }
  } else if (area == "interstate") {
    if (speed >= 0 && speed <= 90) { msg = ""; }
    else if (speed > 90 && speed <= 110) { msg = "speeding"; }
    else if (speed > 110 && speed <= 130) { msg = "excessive speeding"; }
    else { msg = "reckless driving"; }
  } else if (area == "motorway") {
    if (speed >= 0 && speed <= 130) { msg = ""; }
    else if (speed > 130 && speed <= 150) { msg = "speeding"; }
    else if (speed > 150 && speed <= 170) { msg = "excessive speeding"; }
    else { msg = "reckless driving"; }
  }

  console.log(msg);

}

//RoadRadar([21, 'residential']);