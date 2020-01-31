function result() {

  let result = [];
  let dataTypesDict = [];

  for (let i = 0; i < arguments.length; i++) {
    let dataType = typeof(arguments[i]);
    result.push(`${dataType}: ${arguments[i]}`);
  
    if (!dataTypesDict.some(element => element.key == dataType)) {
      dataTypesDict.push({
        key: dataType,
        val: 1
      });
    } else {
      let index = dataTypesDict.findIndex(element => element.key == dataType);
      dataTypesDict[index].val++;
    }

  }

  dataTypesDict.sort(function(a, b){
    if (a.val > b.val) {
      return -1;
    } else if (a.val < b.val) {
      return 1;
    }
  });


  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }

  for (let i = 0; i < dataTypesDict.length; i++) {
    console.log(`${dataTypesDict[i].key} = ${dataTypesDict[i].val}`);
  }

  // console.log(result);
  // console.log(dataTypesDict);

}

result('cat', 42, 42, function () { console.log('Hello world!'); });