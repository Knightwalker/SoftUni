function solve() {

	let dictionaryElement = document.querySelector("#exercise > div > ol");
	let dictionaryObj = {
 		a: [],
  		b: [],
  		c: [],
 		d: [],
  		e: [],
  		f: [],
  		g: [],
  		h: [],
  		i: [],
  		j: [],
  		k: [],
  		l: [],
  		m: [],
  		n: ["Nixon"],
  		o: [],
  		p: ["Peterson"],
  		q: [],
  		r: [],
  		s: [],
  		t: [],
  		u: [],
  		v: [],
  		w: [],
  		x: [],
  		y: [],
  		z: []
 	};
	
	let input = document.querySelector("#exercise > article > input[type=text]");
	document.querySelector("#exercise > article > button").addEventListener("click", function(){
		let inputArr = input.value.split(", ").filter(n => n);
		input.value = ""; // clear the input textfield;
		
		for (let i = 0; i < inputArr.length; i++) {
			let name = inputArr[i].toLowerCase();
			let nameFixed = name[0].toUpperCase(); // placeholder for the properly formated name;
			let initial = name[0]; // first letter of the name;
			for (let j = 1; j < name.length; j++) { nameFixed += name[j]; }
			dictionaryObj[initial].push(nameFixed);
		}

		//dictionaryObj[initial].sort();
		let temp = ""; // preparing the <li></li> elements
		for (let key in dictionaryObj) {
       		let sortedStr = dictionaryObj[key].join(", ");
       		temp += `<li>${sortedStr}</li>`;
	        //console.log(`this key ${key}, contains this ${sortedStr}`);
		}
		//console.log(dictionaryElement);
		dictionaryElement.innerHTML = temp;

	});

 	//console.log(dictionaryObj);
    
}