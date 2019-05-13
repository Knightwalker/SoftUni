function Walking(args) {
  let i = 0;
  let command = args[i];
  let steps = 0;

  while(steps < 10000) {

    if (command == "Going home") {
      steps += parseInt(args[i + 1]);
      break;
    }

    console.log("loop " + i);
    console.log(command);
    steps += parseInt(command);

    i++;
    command = args[i];
  }

console.log(steps);

  if (steps < 10000) {
    console.log(10000 - steps + " more steps to reach goal.");
  } else {  
    console.log("Goal reached! Good job!");
  }
}