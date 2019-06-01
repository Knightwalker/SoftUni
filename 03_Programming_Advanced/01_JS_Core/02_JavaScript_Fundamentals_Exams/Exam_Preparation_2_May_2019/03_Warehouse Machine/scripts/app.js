function coffeeStorage() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let reportElement = document.getElementsByTagName("p")[0];
    let inspectionElement = document.getElementsByTagName("p")[1];
    let storage = {};

  	for (let i = 0; i < input.length; i++) {
  		let currentArr = input[i].split(", ");
  		let command = currentArr[0];

  		if (command == "IN") {
  			let brand = currentArr[1];
  			let name = currentArr[2];
  			let dateExp = currentArr[3];
  			let quantity = Number(currentArr[4]); 

  			//console.log(`currently playing with ${brand} ${name} ${dateExp} ${quantity}`);
  		
  			if (!(storage[brand])) {
  				storage[brand] = {};
  				storage[brand][name] = {};
  				storage[brand][name]["dateExp"] = dateExp;
  				storage[brand][name]["quantity"] = quantity;
  			} else {
  				if (!(storage[brand][name])) {
  					storage[brand][name] = {};
  				    storage[brand][name]["dateExp"] = dateExp;
  				    storage[brand][name]["quantity"] = quantity;
  				} else {
	  				let storageDateArr = storage[brand][name]["dateExp"].split("-");
	  				let currentDateArr = dateExp.split("-");
	  				let storageDateNum = Number(storageDateArr[0]) * 365;
	  				storageDateNum += Number(storageDateArr[1]) * 30.4167;
	  				storageDateNum += Number(storageDateArr[2]);
	  				let currentDateNum = Number(currentDateArr[0]) * 365;
	  				currentDateNum += Number(currentDateArr[1]) * 30.4167;
	  				currentDateNum += Number(currentDateArr[2]);

  					//console.log(storageDateArr);
  					//console.log(currentDateArr);

  					if (currentDateNum > storageDateNum) {
  						storage[brand][name]["dateExp"] = dateExp;
  						//storage[brand][name]["quantity"] = Number(quantity);
  					} else if (currentDateNum == storageDateNum) {
  						storage[brand][name]["quantity"] += quantity;
  					}

  				}
  			}

  		} else if (command == "OUT") {
  			let brand = currentArr[1];
  			let name = currentArr[2];
  			let dateExp = currentArr[3];
  			let quantity = Number(currentArr[4]); 

  			//console.log(`currently playing with ${brand} ${name} ${dateExp} ${quantity}`);

  			if (storage[brand]) {
  				if (storage[brand][name]) {
	  				let storageDateArr = storage[brand][name]["dateExp"].split("-");
	  				let currentDateArr = dateExp.split("-");
	  				let storageDateNum = Number(storageDateArr[0]) * 365;
	  				storageDateNum += Number(storageDateArr[1]) * 30.4167;
	  				storageDateNum += Number(storageDateArr[2]);
	  				let currentDateNum = Number(currentDateArr[0]) * 365;
	  				currentDateNum += Number(currentDateArr[1]) * 30.4167;
	  				currentDateNum += Number(currentDateArr[2]);

	  				if (currentDateNum < storageDateNum) {
	  					let storageQuantity = storage[brand][name]["quantity"];
	  					if (quantity < storageQuantity) {
	  						storage[brand][name]["quantity"] -= quantity;
	  					}
	  				}
  				}
  			}
  		
  		} else if (command == "REPORT") {

  			for (brands in storage) {
  				let currentBrand = brands;
  				let currentBrandObj = storage[brands];
  				let res = currentBrand + ": ";

  				for (names in currentBrandObj) {
  					let currentName = names;
  					let currentExpDate = currentBrandObj[names]["dateExp"];
  					let currentQuantity = currentBrandObj[names]["quantity"];
  					res += currentName + " - " + currentExpDate + " - " + currentQuantity + ". ";	
  				}
  				if (res[res.length - 1] == " ") {
  					let temp = "";
  					for (let j = 0; j < res.length - 1; j++) {
  						temp += res[j];
  					}
  					res = temp;
  				}

				let textnode = document.createTextNode(res); 
				let br = document.createElement('br');
				reportElement.appendChild(textnode);
				reportElement.appendChild(br);
  			}

  		} else if (command == "INSPECTION") {

  			// sort the brands alphabetically
  			storage = sortAssocArr(storage);

  			for (brands in storage) {
  				let currentBrand = brands;
  				let currentBrandObj = storage[brands];
  				let res = currentBrand + ": ";

  				// sort the names by quantity
				let currentSortedBrandObj = sortAssocArrSecond(currentBrandObj);
  				
  				for (names in currentSortedBrandObj) {
  					let currentName = names;
  					let currentExpDate = currentSortedBrandObj[names]["dateExp"];
  					let currentQuantity = currentSortedBrandObj[names]["quantity"];
  					res += currentName + " - " + currentExpDate + " - " + currentQuantity + ". ";	
  				}
  				if (res[res.length - 1] == " ") {
  					let temp = "";
  					for (let j = 0; j < res.length - 1; j++) {
  						temp += res[j];
  					}
  					res = temp;
  				}

				let textnode = document.createTextNode(res); 
				let br = document.createElement('br');
				inspectionElement.appendChild(textnode);
				inspectionElement.appendChild(br);
  			}

  		}

  	}

  	//console.log(storage);

	function sortAssocArr(assocArr) {
		var keys = new Array();
		for(let i in assocArr) { 
			keys.push(i); 
		}
		
		keys.sort();

		let sortedArray = new Array(); 
		for(let i = 0; i < keys.length; i++ ) {
			sortedArray[keys[i]] = assocArr[keys[i]];
		}
	 
		return sortedArray;
	}

	function sortAssocArrSecond(assocArr) {
		
		var keys = [];
		for (var key in assocArr) {
		  keys.push(key);
		}

		keys.sort(function(k0, k1) {
		  var a = assocArr[k0]["quantity"];
		  var b = assocArr[k1]["quantity"];		  
		  if (a < b) { return 1; }
		  else if (a > b) { return -1; }
		});

		let sortedArray = new Array(); 
		for(let i = 0; i < keys.length; i++ ) {
			sortedArray[keys[i]] = assocArr[keys[i]];
		}

		return sortedArray;

	}

}


//["IN, Batdorf & Bronson, Espresso, 2025-05-25, 20","IN, Folgers, Black Silk, 2023-03-01, 14","IN, Lavazza, Crema e Gusto, 2023-05-01, 5","IN, Lavazza, Crema e Gusto, 2023-05-02, 5","IN, Folgers, Black Silk, 2022-01-01, 10","IN, Lavazza, Intenso, 2022-07-19, 20","OUT, Dallmayr, Espresso, 2022-07-19, 5","OUT, Dallmayr, Crema, 2022-07-19, 5","OUT, Lavazza, Crema e Gusto, 2020-01-28, 2","REPORT","INSPECTION"]