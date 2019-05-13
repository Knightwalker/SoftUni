function PointOnRectangleBorder(args) {
  let x1 = parseFloat(args[0]);
  let y1 = parseFloat(args[1]);
  let x2 = parseFloat(args[2]);
  let y2 = parseFloat(args[3]);
  let x = parseFloat(args[4]);
  let y = parseFloat(args[5]);

  let borderX = false;
  let borderY = false;

  let msg = "";

  if ((y >= y1 && y <= y2) && (x == x1 || x == x2)) {borderX = true;}
  if ((x >= x1 && x <= x2) && (y == y1 || y == y2)) {borderY = true;}
  
  if (borderX == true || borderY == true) {
    msg = "border";
  } else {
    msg = "Inside / Outside";
  }

  console.log(msg);
  
}

/* This excersice can be improven by requiring that both Inside and Outside of the rectangle are calculated 
and if the point is inside, it could calculate whether it would be on the border of X or on the border of Y

function PointOnRectangleBorder(args) {
  let x1 = parseFloat(args[0]);
  let y1 = parseFloat(args[1]);
  let x2 = parseFloat(args[2]);
  let y2 = parseFloat(args[3]);
  let x = parseFloat(args[4]);
  let y = parseFloat(args[5]);

  let insideX = false;
  let insideY = false;
  let borderX = false;
  let borderY = false;

  let msg = "";

  if (x >= x1 && x <= x2 ) {insideX = true;}
  if (y >= y1 && y <= y2 ) {insideY = true;}
  if ((y >= y1 && y <= y2) && (x == x1 || x == x2)) {borderX = true;}
  if ((x >= x1 && x <= x2) && (y == y1 || y == y2)) {borderY = true;}

  if (insideX == true && insideY == true) {
    msg = "Inside Rectangle";
    
    if (borderX == true) { msg = "Inside Rectangle - On the border of X";}
    if (borderY == true) { msg = "Inside Rectangle - On the border of Y";}

  } else {
    msg = "Outside Rectangle";
  }

  console.log(msg);
}

*/