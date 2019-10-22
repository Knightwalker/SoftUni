function solve(arr1, arr2) {

  let productsList = [];

  for (let i = 0; i < arr1.length; i+=2) {
    let name = arr1[i];
    let count = parseInt(arr1[i + 1]);
    let product = {};

    product.name = name;
    product.count = parseFloat(count);
    productsList.push(product);
  }

  for (let i = 0; i < arr2.length; i+=2) {
    let name = arr2[i];
    let count = parseInt(arr2[i + 1]);
    let product = {};

    let index = productsList.findIndex(el => el.name === name);
    if (index >= 0) {
      productsList[index].count += count;
    } else {
      product.name = name;
      product.count = parseFloat(count);
      productsList.push(product);
    }
  }

  for (let product of productsList) {
    console.log(`${product.name} -> ${product.count}`);
  }

}

// solve([
//   'Chips', '5', 
//   'CocaCola', '9', 
//   'Bananas', '14', 
//   'Pasta', '4', 
//   'Beer', '2'
// ] , [
//   'Flour', '44', 
//   'Oil', '12', 
//   'Pasta', '7', 
//   'Tomatoes', '70', 
//   'Bananas', '30'
// ]);
  