function CatNumbers(args) {

  let n = Number(args[0]);
  let index = 0;
  let res = "";

  for (i = 1; i <= n; i++) {
    let firstName = args[index+1];
    let lastName = args[index+2];
    let yearBorn = args[index+3];
    index += 3;
    res = "";

    let fName = firstName.charCodeAt(0);
    let lName = lastName.charCodeAt(0);

    res += yearBorn + "" + fName + "" + lName + "" + i;
	console.log(res);
  }

}