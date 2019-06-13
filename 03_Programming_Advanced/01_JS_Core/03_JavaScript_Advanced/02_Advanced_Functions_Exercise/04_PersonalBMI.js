function BMI(name, age, weight, height) {

  let chart = {
    name: name,
    personalInfo:  {
      age: age,
      weight: weight,
      height: height
    }
  };

  let bmi = Math.round(weight / (height / 100 * height / 100));
  chart['BMI'] = bmi;

  let status = "";
  if (bmi < 18.5) { status = "underweight"; }
  else if (bmi >= 18.5 && bmi < 25) { status = "normal"; }
  else if (bmi >= 25 && bmi < 30) { status = "overweight"; }
  else if (bmi >= 30) { status = "obese"; }
  chart['status'] = status;

  if ( chart['status'] == "obese") {
    chart['recommendation'] = 'admission required';  
  }

  return chart;

}

//console.log(BMI("Peter", 29, 75, 182));