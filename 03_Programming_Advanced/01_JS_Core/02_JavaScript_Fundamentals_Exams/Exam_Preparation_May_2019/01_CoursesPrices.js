function CoursesPrices(fundamentals, advanced, apps, form) {
  let total = 0;
  const courses = {
    'JS Fundamentals': 170,
    'JS Advanced': 180,
    'JS Apps': 190
  };

  if (fundamentals) {
    total += courses['JS Fundamentals'];
  } 
  if (advanced) {
    total += courses['JS Advanced'];
  }
  if (apps) {
    total += courses['JS Apps'];
  }

  if (fundamentals && advanced) {
    total -= courses['JS Advanced'] * 0.1;
  }
  if (fundamentals && advanced && apps) {
    total -= total * 0.06;
  }
  if (form === "online") {
    total -= total * 0.06;
  }

  console.log(Math.round(total));

}

//CoursesPrices(true,false,false,"onsite");
//CoursesPrices(true,true,false,"onsite");