function TrainStation(wagonCapacity, passengersArr) {

  let trainArr = [];
  for (let i = 0; i < passengersArr.length; i++) {
    trainArr[i] = 0;
  }

  let remainingWave = 0;
  for (let i = 0; i < passengersArr.length; i++) {
    let currentWave = Number(passengersArr[i]);
    currentWave += remainingWave;
    remainingWave = 0;

    if (currentWave <= wagonCapacity) {
      trainArr[i] = currentWave;
    } else {
      trainArr[i] = Number(wagonCapacity);
      remainingWave = currentWave - Number(wagonCapacity);
    }

    //console.log(trainArr);
  }

  if (remainingWave == 0) {
    console.log(trainArr);
    console.log("All passengers aboard");
  } else {
    console.log(trainArr);
    console.log(`Could not fit ${remainingWave} passengers`);
  }

}

//TrainStation(10, [9, 39, 1, 0, 0]);
//TrainStation(6, [5, 15, 2]);