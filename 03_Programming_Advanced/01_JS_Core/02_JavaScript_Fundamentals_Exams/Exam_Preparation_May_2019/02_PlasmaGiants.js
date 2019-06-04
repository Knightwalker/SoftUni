function PlasmaGiants(plasmaArr, cutSize) {

  let firstPart = plasmaArr.slice(0, plasmaArr.length / 2);
  let secondPart = plasmaArr.slice(plasmaArr.length / 2);

  //console.log(firstPart);
  //console.log(secondPart);

  let firstGiantLife = 0;
  let secondGiantLife = 0;
  while(firstPart.length > 0 && secondPart.length > 0) {
    firstGiantLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
    secondGiantLife += secondPart.splice(0, cutSize).reduce((a, b) => a * b);   
  }
  
   //console.log(firstGiantLife);
   //console.log(secondGiantLife);

    let damagePerHit = Math.min(...plasmaArr);
    let deadLine = Math.max(...plasmaArr); 
    let rounds = 1;
    let minLife = Math.min(firstGiantLife, secondGiantLife);
    let pointsToDead = minLife - deadLine;

    if (pointsToDead <= damagePerHit) {
      let hitsCounter = 1;
      if (pointsToDead % damagePerHit === 0) {
        hitsCounter = pointsToDead / damagePerHit;
      } else {
        hitsCounter = Math.ceil(pointsToDead / damagePerHit);
      }
    }

    if(damagePerHit !== 0) {
      while(firstGiantLife > deadLine && secondGiantLife > deadLine) {
        firstGiantLife -= damagePerHit;
        secondGiantLife -= damagePerHit;
        rounds++;
      }
    }

    if (firstGiantLife === secondGiantLife) {
      console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    } else if (firstGiantLife < secondGiantLife) {
      console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);
    } else if (secondGiantLife < firstGiantLife) {
      console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    }

}

//PlasmaGiants([1,2,3,4,5,6,7,8,9,10,11,12], 3);
//PlasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
//PlasmaGiants([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);