function WaterDispenser(args) {
  let water = parseFloat(args[0]);
  let i = 0;
  let buttonPushed = "";

  while(water > 0) {
    i++;
    buttonPushed = args[i];

    if (buttonPushed == "Easy") { water -= 50; }
    else if (buttonPushed == "Medium") { water -= 100; }
    else if (buttonPushed == "Hard") { water -= 200; }
  }

    if (water < 0) {
      console.log(Math.abs(water) + "ml has been spilled.")
    } else {
      console.log("The dispenser has been tapped " + i + " times.");
    }
    
}