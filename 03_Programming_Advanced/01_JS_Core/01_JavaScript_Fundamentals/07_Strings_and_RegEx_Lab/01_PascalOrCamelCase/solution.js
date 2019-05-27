function solve() {
	let str = document.getElementById("text").value;
	let mode = document.getElementById("naming-convention").value;
	let resultElement = document.getElementById("result");
	let button = document.querySelector("body > form > input[type=button]").addEventListener("click", PascalOrCamelCase(str, mode));

	function PascalOrCamelCase(str, mode) {
		let res = "";
		let arr = str.split(" ");
		let initials = [];

		if (mode == "Camel Case") {
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i].toLowerCase();
			}
				res += arr[0];
			for (let i = 1; i < arr.length; i++) {
				let tempStr = arr[i][0].toUpperCase();
				let tempArr = arr[i].split("");
				tempArr.shift();
				tempStr += tempArr.join("");
				res += tempStr;
			}

		} else if (mode == "Pascal Case") {
			for (let i = 0; i < arr.length; i++) {
				arr[i] = arr[i].toLowerCase();
			}
			for (let i = 0; i < arr.length; i++) {
				let tempStr = arr[i][0].toUpperCase();
				let tempArr = arr[i].split("");
				tempArr.shift();
				tempStr += tempArr.join("");
				res += tempStr;
			}

		} else {
			res = "Error!";
		}

		resultElement.textContent = res;
	  
	}

}