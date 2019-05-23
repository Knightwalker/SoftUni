function solve() {
   
   let searchBtn = document.getElementById("searchBtn");
   let searchField = document.getElementById("searchField");
   let rows = document.querySelectorAll("tbody tr");
   searchBtn.addEventListener("click", clickEvent);

   function clickEvent() {
   	let searchParam = searchField.value;

   	// clear the input field and remove all already selected classes
   	searchField.value = "";
   	for (let row of rows) { 
   		row.setAttribute("class", ""); 
   	}

 	console.log(searchParam);

 	for (let i = 0; i < rows.length; i++) {
 		let currentRow = rows[i];
 		let elements = currentRow.getElementsByTagName("td"); // returns HTMLCollection from the 3 elements in the current row;

 		let checker = false; // check whether a string contains the characters of a specified string.
 		for (let j = 0; j < elements.length; j++) {
 			let element = elements[j].textContent;
 			element = element.toLowerCase();
 			searchParam = searchParam.toLowerCase();
 		
 			console.log(element);
 			if (element.includes(searchParam) && elements != "" && elements != " ") {
 				checker = true;
 			}
 			console.log(checker);
 		}

 		if (checker == true) {
 			currentRow.setAttribute("class", "select");
 		}

 	}

   }
}