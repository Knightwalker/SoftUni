function main(array) {
  let trainsToTowns = [];

  for (let i = 0; i < array.length; i++) {
    const data = array[i];
    
    if(data == 'Slide rule') {
      break;
    }

    let dataSplitByColon = data.split(':');
    let townName = dataSplitByColon[0];
    let dataSplitByArrow = dataSplitByColon[1].split('->');
    let passengersCount = Number(dataSplitByArrow[1]);

    if(dataSplitByArrow[0] == 'ambush') {
      let index = trainsToTowns.findIndex(x => x.TownName == townName);
      if(index >= 0) {
        trainsToTowns[index].PassengersCount -= passengersCount;
        trainsToTowns[index].Time = 0;
      }
    } else {
      let time = Number(dataSplitByArrow[0]);
      let index = trainsToTowns.findIndex(x => x.TownName == townName);

      if(index < 0) {
        let obj = {
          'TownName': townName,
          'Time': time,
          'PassengersCount': passengersCount
        };
  
        trainsToTowns.push(obj);
      } else {
        let obj = trainsToTowns[index];
        if(obj.Time > time || obj.Time == 0) {
          obj.Time = time;
        }

        obj.PassengersCount += passengersCount;
      }
      
    }
  }

  //best time
  trainsToTowns.sort(function(a,b) {
    if(a.Time > b.Time) {
      return 1;
    } else if(a.Time < b.Time) {
      return -1;
    } else {
      return a.TownName.localeCompare(b.TownName);
    }
  });

  //{townName} -> Time: {fastestTime} -> Passengers: {totalCountPassengers}
  for (let i = 0; i < trainsToTowns.length; i++) {
    if(trainsToTowns[i].Time == 0 || trainsToTowns[i].PassengersCount <= 0) {
      continue;
    }
    console.log(`${trainsToTowns[i].TownName} -> Time: ${trainsToTowns[i].Time} -> Passengers: ${trainsToTowns[i].PassengersCount}`);    
  }

}

// main(['Sto-Lat:8->120',
//   'Ankh-Morpork:3->143',
//   'Sto-Lat:9->80',
//   'Ankh-Morpork:4->143',
//   'Sto-Lat:3->20',
//   'Quirm:12->40',
//   'Quirm:13->29',
//   'Slide rule'
//   ]);

  main(['Quirm:12->258',
    'Ankh-Morpork:ambush->200',
    'Ankh-Morpork:3->143',
    'Sto-Lat:4->80',
    'Ankh-Morpork:4->143',
    'Ankh-Morpork:ambush->143',
    'Sto-Lat:3->20',
    'Ankh-Morpork:5->17',
    'Slide rule'
    ]);