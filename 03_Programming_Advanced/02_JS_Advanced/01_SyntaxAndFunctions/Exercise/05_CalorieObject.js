function main(args) {
  let s = "{ "

  for (let i = 0; i < args.length; i+= 2) {
    s += args[i];
    s += ": ";
    s += args[i + 1];
    if (i != args.length - 2) {
      s += ", ";
    }
  }

  s += " }";

  console.log(s);

}

//main(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
main(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);