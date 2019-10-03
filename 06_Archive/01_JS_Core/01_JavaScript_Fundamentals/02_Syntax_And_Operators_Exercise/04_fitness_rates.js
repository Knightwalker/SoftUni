function FitnessRates(arg1, arg2, arg3) {
  let dayOfWeek = arg1.toLowerCase();
  let product = arg2.toLowerCase();
  let timeOfDay = Number(arg3); 
  let price = 0;

  if (dayOfWeek == "monday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 5;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7.5;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 4;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 6.5;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.5;
      }
    }
  } else if (dayOfWeek == "tuesday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 5;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7.5;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 4;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 6.5;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.5;
      }
    }
  } else if (dayOfWeek == "wednesday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 5;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7.5;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 4;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 6.5;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.5;
      }
    }
  } else if (dayOfWeek == "thursday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 5;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7.5;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 4;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 6.5;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.5;
      }
    }
  } else if (dayOfWeek == "friday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 5;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7.5;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 4;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 6.5;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.50;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 10;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 12.5;
      }
    }
  } else if (dayOfWeek == "saturday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 8;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 8;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 7;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 15;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 15;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 15;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 15;
      }
    }
  } else if (dayOfWeek == "sunday") {
    if (product == "fitness") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 8;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 8;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 7;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 7;
      }
    } else if (product == "instructor") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 15;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 15;
      }
    } else if (product == "sauna") {
      if (timeOfDay >= 8 && timeOfDay <= 15) {
        price = 15;
      } else if (timeOfDay > 15 && timeOfDay <= 22) {
        price = 15;
      }
    }
  }

  console.log(price);

}

//FitnessRates('Monday', 'Sauna', 15.30);
//FitnessRates('Sunday', 'Fitness', 22.00);