function main(arg1) {

  let size = 0;
  let output = "";

  if (arg1 == undefined) {
    size = 5;
  } else {
    size = arg1;
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      output += "* ";
    }
    output += "\n";
  }

  console.log(output);

}

main(2);