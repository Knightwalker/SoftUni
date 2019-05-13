function Vacation(arg1, arg2, arg3) {
  let people = Number(arg1);
  let typeOfPeople = arg2;
  let dayOfWeek = arg3;
  let price = 0;
  let totalPrice = 0;

  if (dayOfWeek == "Friday") {
    if (typeOfPeople == "Students") { price = 8.45; } 
    else if (typeOfPeople == "Business") { price = 10.90; } 
    else if (typeOfPeople == "Regular") { price = 15; }
  } else if (dayOfWeek == "Saturday") {
    if (typeOfPeople == "Students") { price = 9.80; } 
    else if (typeOfPeople == "Business") { price = 15.60; } 
    else if (typeOfPeople == "Regular") { price = 20; }
  } else if (dayOfWeek == "Sunday") {
    if (typeOfPeople == "Students") { price = 10.46; } 
    else if (typeOfPeople == "Business") { price = 16; } 
    else if (typeOfPeople == "Regular") { price = 22.50; }    
  }

  totalPrice = price * people;

  if (typeOfPeople == "Students") { 
    if (people >= 30) {
      totalPrice -= totalPrice * 0.15;
    }
  } else if (typeOfPeople == "Business") {
    if (people >= 100) {
      totalPrice -= price * 10;
    }
  } else if (typeOfPeople == "Regular") {
    if (people >= 10 && people <= 20) {
      totalPrice -= totalPrice * 0.05;
    }
  }

  console.log("Total price: " + totalPrice.toFixed(2));

}

//Vacation(40, "Regular", "Saturday");