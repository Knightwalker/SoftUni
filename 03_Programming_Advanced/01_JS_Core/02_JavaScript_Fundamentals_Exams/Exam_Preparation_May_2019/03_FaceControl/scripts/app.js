function getData () {
	let input = JSON.parse(document.querySelector("textarea").value);
	let peopleInEl = document.querySelector("#peopleIn p");
	let blacklistEl = document.querySelector("#blacklist p");
	let peopleOutEl = document.querySelector("#peopleOut p");
	let lastElement = input.pop();

	let peopleIn = [];
	let blacklist = [];
	let peopleOut = [];

	for (let person of input) {
		let action = person.action;
		let currentName = {
			firstName: person.firstName,
			lastName: person.lastName
		}
		
		if (action === "peopleIn") {
			if (!blacklist.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				peopleIn.push(currentName);
			}
		} else if (action === "peopleOut") {
			if (peopleIn.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName);
				peopleIn.splice(index, 1);
				peopleOut.push(currentName);
			}
		} else if (action === "blacklist") {
			if (peopleIn.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName);
				peopleIn.splice(index, 1);
				peopleOut.push(currentName);
			}
			blacklist.push(currentName);
		}
	
	}

	let output = {};
	output["peopleIn"] = peopleIn;
	output["peopleOut"] = peopleOut;
	output["blacklist"] = blacklist;

	//console.log(output);

	if (lastElement.action !== "" && lastElement.criteria !== "") {
		let criteria = lastElement.criteria;
		output[lastElement.action] = output[lastElement.action].sort((a, b) => a[criteria].localeCompare(b[criteria]));
	}

	//console.log(output);

	peopleInEl.textContent = output.peopleIn.map(x => JSON.stringify(x)).join(" ");
	peopleOutEl.textContent = output.peopleOut.map(x => JSON.stringify(x)).join(" ");
	blacklistEl.textContent = output.blacklist.map(x => JSON.stringify(x)).join(" ");

}

// [{"firstName":"Jon","lastName":"Snow","action":"peopleIn"},{"firstName":"Jonny","lastName":"Bravo","action":"peopleIn"},{"firstName":"John","lastName":"Doe","action":"peopleOut"},{"firstName":"Jon","lastName":"Snow","action":"peopleOut"},{"firstName":"John","lastName":"Doe","action":"peopleOut"},{"firstName":"Lenny","lastName":"Kravitz","action":"blacklist"},{"firstName":"Lenny","lastName":"Kravitz","action":"peopleIn"},{"firstName":"Marwin","lastName":"Athelstein","action":"peopleIn"},{"criteria":"lastName","action":"peopleIn"}]