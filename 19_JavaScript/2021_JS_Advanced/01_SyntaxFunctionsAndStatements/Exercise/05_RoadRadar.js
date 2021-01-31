function solve(speed, area) {
  let limit = 0;

  if (area === "motorway")         { limit = 130; } 
  else if (area === "interstate")  { limit = 90; } 
  else if (area === "city")        { limit = 50; } 
  else if (area === "residential") { limit = 20; }

  let diff = speed - limit;

  if (diff <= 0) {
    return console.log(`Driving ${speed} km/h in a ${limit} zone`);
  }

  if (diff <= 20) {
    return console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`);
  } else if (diff <= 40) {
    return console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`);
  } else {
    return console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`);
  }

}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');