function acceptance() {
	let companyEl = document.querySelector("#fields > td:nth-child(1) > input[type=text]");
	let productEl = document.querySelector("#fields > td:nth-child(2) > input[type=text]");
	let quantityEl = document.querySelector("#fields > td:nth-child(3) > input[type=text]");
	let scrapeEl = document.querySelector("#fields > td:nth-child(4) > input[type=text]");
	let warehouseEl = document.getElementById("warehouse");

	document.getElementById("acceptance").addEventListener("click", function(){

		console.log(!isNaN(scrapeEl.value));
		if (companyEl.value != "" && productEl.value != "" && quantityEl.value != "" && scrapeEl.value != "") {
			if (!isNaN(quantityEl.value) && !isNaN(scrapeEl.value)) {
				
				let companyName = companyEl.value;
				let productName = productEl.value;
				let quantity = Number(quantityEl.value);
				let scrape = Number(scrapeEl.value);
				let productQuantity = quantity - scrape;
			
				if (productQuantity > 0) {
					let divEl = document.createElement("div");

					let pEl = document.createElement("p");
					pEl.textContent = `[${companyName}] ${productName} - ${productQuantity} pieces`;
					divEl.appendChild(pEl);

					let bEl = document.createElement("button");
					bEl.textContent = "Out of stock";
					bEl.addEventListener("click", function(e){
						e.target.parentElement.parentElement.removeChild(e.target.parentElement);
					});
					divEl.appendChild(bEl);
		
					warehouseEl.appendChild(divEl);
				}

			}
		}

		// reset the fields
		companyEl.value = "";
		productEl.value = "";
		quantityEl.value = "";
		scrapeEl.value = "";

	});
}