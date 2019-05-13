function PointInRectangle(args) {
  let x1 = parseFloat(args[0]);
  let y1 = parseFloat(args[1]);
  let x2 = parseFloat(args[2]);
  let y2 = parseFloat(args[3]);
  let x = parseFloat(args[4]);
  let y = parseFloat(args[5]);

  let insideX = false;
  let insideY = false;
  let msg = "";

  if (x >= x1 && x <= x2 ) {insideX = true;}
  if (y >= y1 && y <= y2 ) {insideY = true;}

  if (insideX == true && insideY == true) {
    msg = "Inside";
  } else {
    msg = "Outside";
  }
 
  console.log(msg);
}