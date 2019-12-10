function CommonNumbers(arg1, arg2, arg3) {
  
  let elementsArr = [];
  let average = 0;
  let median = 0;
  let res = "The common elements are ";
  
  for (let i = 0; i < arg1.length; i++) {
    for (let i2 = 0; i2 < arg2.length; i2++) {
      for (let i3 = 0; i3 < arg3.length; i3++) {        
        
        if (elementsArr.includes(arg1[i]) == false) {
             
          if (arg1[i] == arg2[i2]) {
            if (arg2[i2] == arg3[i3]) { 
              elementsArr.push(arg1[i]);    
              average += Number(arg1[i]);   
            }
          }   

        }
        
      }
    }
  }

  let len = elementsArr.length;

  elementsArr = elementsArr.sort();
  average = average / len;
  
  median = Median(elementsArr);

  for (i = 0; i < elementsArr.length; i++) {
    res += elementsArr[i];
    if (i < elementsArr.length - 1) {
      res += ", ";  
    } else {
      res += ".";
    }
  }

  console.log(res);
  console.log("Average: " + average + ".");
  console.log("Median: " + median + ".");

  function Median(values){
    if(values.length === 0) return 0;

    values.sort(function(a,b){
      return a-b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
      return values[half];

    return (values[half - 1] + values[half]) / 2.0;
  }

}

//CommonNumbers([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50]);