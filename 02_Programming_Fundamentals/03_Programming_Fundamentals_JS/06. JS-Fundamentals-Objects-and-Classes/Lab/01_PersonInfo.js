function solve(firstName, lastName, age) {

  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

}

function solve(firstName, lastName, age) {
  //TODO: Create the person object and set the properties

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}