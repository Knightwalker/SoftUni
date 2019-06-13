function processCommands(commands) {
  let commandProcessor = (function() {
    let text = "";
    return {
      append: function(newText) {
        text += newText;
      },
      removeStart: function(n) {
        text = text.slice(n, text.length);
      },
      removeEnd: function(n) {
        text = text.slice(0, text.length - n);
      },
      print: function() {
        console.log(text);
      }
    }
  })();

  for (let cmd of commands) {
    let [cmdName, arg] = cmd.split(" ");
    commandProcessor[cmdName](arg);
  }

}

//processCommands(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);