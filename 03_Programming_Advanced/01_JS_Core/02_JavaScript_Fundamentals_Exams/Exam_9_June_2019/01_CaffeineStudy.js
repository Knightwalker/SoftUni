function CaffeineStudy(days) {

  let coffee = 0;
  let cocacola = 0;
  let tea = 0;
  let energy = 0;

  for (let i = 1; i <= days; i++) {
    //every day
    coffee += 3 * 150;
    cocacola += 2 * 250;
    tea += 3 * 350;

    //every 5'th day
    if (i % 5 == 0) {
      energy += 3 * 500;
    }

    if (i % 9 == 0) {
      cocacola += 4 * 250;
      energy += 2 * 500;
    }
  }
  
  let coffeeCaffeine = coffee * 0.4;
  let cocacolaCaffeine = cocacola * 0.08;
  let teaCaffeine = tea * 0.2;
  let energyCaffeine = energy * 0.3;
  let totalCaffeine = coffeeCaffeine + cocacolaCaffeine + teaCaffeine + energyCaffeine;

  //console.log(coffee);
  //console.log(cocacola);
  //console.log(tea);
  //console.log(energy);

  //console.log("------");

  //console.log(coffeeCaffeine);
  //console.log(cocacolaCaffeine);
  //console.log(teaCaffeine);
  //console.log(energyCaffeine);

  //console.log("------");

  console.log(totalCaffeine + " milligrams of caffeine were consumed");

}

//CaffeineStudy(8);