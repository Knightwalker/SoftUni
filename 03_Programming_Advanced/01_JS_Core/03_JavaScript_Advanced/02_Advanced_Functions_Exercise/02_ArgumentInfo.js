function myFunc() {
  let currentArguments = arguments;
  let summaryObj = {}

  for (let i = 0; i < arguments.length; i++) {
    let obj = arguments[i];
    let type = typeof obj;
    console.log(type + ": " + obj);

    if (!summaryObj[type]) {
      summaryObj[type] = [];
      summaryObj[type]['count'] = 0;
      summaryObj[type]['apperance'] = i;
    }
    summaryObj[type]['count']++;
  
  }

  let sortedSummaryObj = [];
  for (let currentType in summaryObj) {
    sortedSummaryObj.push([currentType, summaryObj[currentType]]);
  }

  sortedSummaryObj.sort(function (a, b) {
    let countA = a[1]['count'];
    let countB = b[1]['count'];
    let appearA = a[1]['apperance'];
    let appearB = b[1]['apperance'];
    
    if (countA > countB) {
      return -1;
    } else if (countA < countB) {
      return 1;
    } else if (countA == countB) {
      if (appearA > appearB) {
        return 1;
      } else if (appearA < appearB) {
        return -1;
      }
    }
  });

  //Output
  for (element of sortedSummaryObj) {
    let type = element[0];
    let count = element[1]['count'];
    console.log(`${type} = ${count}`);
  }

}

//myFunc('cat', 42, function () { console.log('Hello world!'); });
//myFunc('dsa', 23, 'cat', 42, function () { console.log('Hello world!'); });