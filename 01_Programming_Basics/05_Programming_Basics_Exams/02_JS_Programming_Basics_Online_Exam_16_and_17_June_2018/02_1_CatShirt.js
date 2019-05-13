function CatShirt(args) {

let sleeveLenght = Number(args[0]);
let frontSide = Number(args[1]);
let material = args[2];
let tie = args[3];

let shirtSizeInCentimeters = (sleeveLenght * 2) + (frontSide * 2);
shirtSizeInCentimeters = shirtSizeInCentimeters + (shirtSizeInCentimeters * 0.10);
let shirtSizeInMeters = shirtSizeInCentimeters / 100;

let multiplierForMaterial = 0;
let multiplierForTie = 0;

if (material == "Linen") { multiplierForMaterial = 15; }
else if (material == "Cotton") { multiplierForMaterial = 12; }
else if (material == "Denim") { multiplierForMaterial = 20; }
else if (material == "Twill") { multiplierForMaterial = 16; }
else if (material == "Flannel") { multiplierForMaterial = 11; }

if (tie == "Yes") { multiplierForTie = 0.20};

let price = shirtSizeInMeters * multiplierForMaterial + 10;
price = price + (price * multiplierForTie);

console.log("The price of the shirt is: " + price.toFixed(2) + "lv.");

}

