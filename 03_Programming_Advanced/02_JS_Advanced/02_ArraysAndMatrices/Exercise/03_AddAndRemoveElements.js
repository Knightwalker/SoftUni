function main(args) {

  let counter = 1;
  let arr = [];

  for (let i = 0; i < args.length; i++) {
    let command = args[i];

    if (command == "add") {
      arr.push(counter);
    } else if (command == "remove") {
      arr.pop();
    }

    counter++;

  }

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("Empty");
  }
  
}

// main(['add', 
// 'add', 
// 'add', 
// 'add']
// );

main(['add', 
'add', 
'remove', 
'add', 
'add']
);