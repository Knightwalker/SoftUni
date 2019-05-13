function theatre_promotions(day, age) {

  let res = 0;

  if (day == "Weekday") {
    if (age >= 0 && age <= 18) { res = 12; }
    else if (age > 18 && age <= 64) { res = 18; }
    else if (age > 64 && age <= 122) { res = 12; }
  } else if (day == "Weekend") {
    if (age >= 0 && age <= 18) { res = 15; }
    else if (age > 18 && age <= 64) { res = 20; }
    else if (age > 64 && age <= 122) { res = 15; }
  } else if (day == "Holiday") {
    if (age >= 0 && age <= 18) { res = 5; }
    else if (age > 18 && age <= 64) { res = 12; }
    else if (age > 64 && age <= 122) { res = 10; }
  }

  if (res > 0) {
    console.log(res + "$");
  } else {
    console.log("Error!");
  }

}

//theatre_promotions('Weekday', 42);