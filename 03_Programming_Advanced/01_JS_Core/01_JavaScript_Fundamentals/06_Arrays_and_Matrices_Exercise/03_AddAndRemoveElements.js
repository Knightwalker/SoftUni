function AddAndRemoveElements(commands) {

  let arr = [];
  let incrementor = 0;

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].toLowerCase();

    if (command == "add") {
      incrementor++;
      arr.push(incrementor);
    } else if (command == "remove") {
      incrementor++;
      arr.pop();
    }

  }

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("Empty");
  }

}

//AddAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);