function Cinema(args) {
  let projection = args[0].toLowerCase();
  let rows = parseFloat(args[1]);
  let cols = parseFloat(args[2]);

  let price = 0.0;
  let people = rows * cols;

  if (projection == "premiere") { price = people * 12; }
  else if (projection == "normal") { price = people * 7.50; }
  else if (projection == "discount") { price = people * 5; }

  console.log(price.toFixed(2));
}