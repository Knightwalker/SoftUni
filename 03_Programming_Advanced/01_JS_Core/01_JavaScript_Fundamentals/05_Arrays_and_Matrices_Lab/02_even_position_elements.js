function EvenPositionElement(arr) {
  let evenElementsArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenElementsArr.push(arr[i]);
    }
  }
  console.log(evenElementsArr.join(" "));
}

//EvenPositionElement(['20', '30', '40']);