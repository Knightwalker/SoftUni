function main(startingYield) {
  let source = Number(startingYield);
  let materialExtract = 0;
  let operatingDays = 0;

  let workersConsume = 0;
  let constConsume = 26;

  while(source >= 100) {
    materialExtract += source;
    workersConsume += constConsume;
    source -= 10;
    operatingDays++;
  }

  if(materialExtract >= constConsume) {
    workersConsume += constConsume;
  }

  console.log(operatingDays);
  console.log(materialExtract - workersConsume);
}

main(450);