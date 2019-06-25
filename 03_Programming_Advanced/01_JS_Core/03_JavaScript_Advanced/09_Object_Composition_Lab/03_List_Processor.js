function List_Processor(inputArrStr) {

  let listprocessor = (function (){
    let collection = [];
    return {
      add(string) { 
        collection.push(string) 
      },
      remove(string) {
        collection = collection.filter(function(el){
          return el != string
        });
      },
      print() 
      { 
        console.log(collection.join(",")); 
      }
    };
     
  })();

  for (let i = 0; i < inputArrStr.length; i++) {
    let currentInputArrStr = inputArrStr[i].split(" ");
    let command = currentInputArrStr[0];

    if (command == "add") {
      let inputStr = currentInputArrStr[1];
      listprocessor.add(inputStr);
    } else if (command == "remove") {
      let inputStr = currentInputArrStr[1];
      listprocessor.remove(inputStr);
    } else if (command == "print") {
      listprocessor.print();
    }
  }

}

// List_Processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// List_Processor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);