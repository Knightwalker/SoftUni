function solve(inputArr) {

  let productsArr = [];
  let totalMoneySpend = 0;

  const pattern = /[>]{2}(?<product>[A-Za-z]+)[<]{2}(?<price>[0-9]+[.]?[0-9]+)[!](?<quantity>[0-9]+)\b/;
  for (let line of inputArr) {
    let match = pattern.exec(line);
    if (match == null) { continue; }

    let product = match.groups["product"];
    let price = match.groups["price"];
    let quantity = match.groups["quantity"];
    productsArr.push(product);
    totalMoneySpend += Number(price) * Number(quantity);

  }

  console.log("Bought furniture:");
  for (let product of productsArr) {
    console.log(product);
  }
  console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);

}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

