function solve() {

  // Generate
  document.getElementsByTagName("button")[0].addEventListener("click", function() {
  	let furnitureList = JSON.parse(document.getElementsByTagName("textarea")[0].value);
 
 	let table = document.getElementsByTagName("tbody")[0];
 	for (let furniture of furnitureList) {
	 	let row = '<tr>'
	 		    + `<td><img src="${furniture["img"]}"></td>`
	 		    + `<td><p>${furniture["name"]}</p></td>`
	 		    + `<td><p>${furniture["price"]}</p></td>`
	 		    + `<td><p>${furniture["decFactor"]}</p></td>`
	 		    + `<td><input type="checkbox"></td>`
	 		    + '</tr>';
	 	table.innerHTML += row;
	 }

  });

  // Buy
  document.getElementsByTagName("button")[1].addEventListener("click", function() {

	let boughtFurniture = [];
	    let totalPrice = 0;
	    let avgDecFactor = 0;
	    let count = 0;

	    let allTr = Array.from(document.getElementsByTagName('tr'));
	    // console.log(allTr[2].children[4].children[0]);
	    for (let i = 2; i < allTr.length; i++) {

	      if (allTr[i].children[4].children[0].checked) {
	        count += 1;
	        boughtFurniture.push(allTr[i].children[1].textContent);
	        totalPrice += +allTr[i].children[2].textContent;
	        avgDecFactor += +allTr[i].children[3].textContent;

	      }
	      // console.log(boughtFurniture);
	    }

	    avgDecFactor = avgDecFactor / (count);
	    // avgDecFactor = (avgDecFactor / (allTr.length - 2)).toFixed(2);

	    document
	      .getElementsByTagName('textarea')[1]
	      .value =
	      "Bought furniture: " +
	      boughtFurniture.join(', ') +
	      "\nTotal price: " +
	      totalPrice.toFixed(2) +
	      "\nAverage decoration factor: " +
	      avgDecFactor;
	  });

}