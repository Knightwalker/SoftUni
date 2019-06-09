function spaceshipCrafting() {

	let titaniumCores = document.getElementById("titaniumCoreFound").value;
	let aluminiumCores = document.getElementById("aluminiumCoreFound").value;
	let magnesiumCores = document.getElementById("magnesiumCoreFound").value;
	let carbonCores = document.getElementById("carbonCoreFound").value;
	let lossesPercent = document.getElementById("lossesPercent").value / 4;
	lossesPercent = lossesPercent / 100;

	console.log(`Before loses ${titaniumCores} titanium bars, ${aluminiumCores} aluminium bars, ${magnesiumCores} magnesium bars, ${carbonCores} carbon bars`);
	console.log(lossesPercent);

	titaniumCores = titaniumCores - (titaniumCores * lossesPercent);
	aluminiumCores = aluminiumCores - (aluminiumCores * lossesPercent);
	magnesiumCores = magnesiumCores - (magnesiumCores * lossesPercent);
	carbonCores = carbonCores - (carbonCores * lossesPercent);
	console.log(`After loses ${titaniumCores} titanium bars, ${aluminiumCores} aluminium bars, ${magnesiumCores} magnesium bars, ${carbonCores} carbon bars`);

	let titaniumBar = Math.round(titaniumCores/25);
	let aluminiumBar = Math.round(aluminiumCores/50);
	let magnesiumBar = Math.round(magnesiumCores/75);
	let carbonBar = Math.round(carbonCores/100);

	let canbuild_theundefinedship = true;
	let canbuild_nullmaster = true;
	let canbuild_jsoncrew = true;
	let canbuild_falsefleet = true;

	let count_theundefinedship = 0;
	let count_nullmaster = 0;
	let count_jsoncrew = 0;
	let count_falsefleet = 0;
	let safeescape = 0;

	while(true) {
		if (canbuild_theundefinedship == false && canbuild_nullmaster == false && canbuild_jsoncrew == false && canbuild_falsefleet == false) {
			break;
		}
		if (safeescape >= 400) { break; }
		safeescape++;

		console.log("Build = " + safeescape);
		console.log(`Current ${titaniumBar} titanium bars, ${aluminiumBar} aluminium bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`);

		// Building The-Undefined-Ship
		if (titaniumBar >= 7 && aluminiumBar >= 9 && magnesiumBar >= 7 && carbonBar >= 7) {
			titaniumBar -= 7;
			aluminiumBar -= 9;
			magnesiumBar -= 7;
			carbonBar -= 7;
			count_theundefinedship ++;
			console.log(count_theundefinedship + " The Undefined-Ship");
			console.log(`Current ${titaniumBar} titanium bars, ${aluminiumBar} aluminium bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`);
			//continue;
		} else {
			console.log("No more - The Undefined-Ship");
			canbuild_theundefinedship = false;
		}

		// Building Null Master
		if (titaniumBar >= 5 && aluminiumBar >= 7 && magnesiumBar >= 7 && carbonBar >= 5) {
			titaniumBar -= 5;
			aluminiumBar -= 7;
			magnesiumBar -= 7;
			carbonBar -= 5;
			count_nullmaster ++;
			console.log(count_nullmaster + " Null Master");
			console.log(`Current ${titaniumBar} titanium bars, ${aluminiumBar} aluminium bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`);
			//continue;
		} else {
			console.log("No more - Null Master");
			canbuild_nullmaster = false;
		}

		// Building JSON Crew
		if (titaniumBar >= 3 && aluminiumBar >= 5 && magnesiumBar >= 5 && carbonBar >= 2) {
			titaniumBar -= 3;
			aluminiumBar -= 5;
			magnesiumBar -= 5;
			carbonBar -= 2;
			count_jsoncrew ++;
			console.log(count_jsoncrew + " JSON Crew");
			console.log(`Current ${titaniumBar} titanium bars, ${aluminiumBar} aluminium bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`);
			//continue;
		} else {
			console.log("No more - JSON Crew");
			canbuild_jsoncrew = false;
		}

		// Building False Fleet
		if (titaniumBar >= 2 && aluminiumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
			titaniumBar -= 2;
			aluminiumBar -= 2;
			magnesiumBar -= 3;
			carbonBar -= 1;
			count_falsefleet ++;
			console.log(count_falsefleet + " False Fleet");
			console.log(`Current ${titaniumBar} titanium bars, ${aluminiumBar} aluminium bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`);
			//continue;
		} else {
			console.log("No more - False Fleet");
			canbuild_falsefleet = false;
		}

	}

	let resBars = document.querySelector("#availableBars > p");
	resBars.textContent = `${titaniumBar} titanium bars, ${aluminiumBar} aluminum bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`;

	let resShips = document.querySelector("#builtSpaceships > p");
	let resShipsArr = [];
	if (count_theundefinedship > 0) {
		resShipsArr.push(`${count_theundefinedship} THE-UNDEFINED-SHIP`);
	}
	if (count_nullmaster > 0) {
		resShipsArr.push(`${count_nullmaster} NULL-MASTER`);
	}
	if (count_jsoncrew > 0) {
		resShipsArr.push(`${count_jsoncrew} JSON-CREW`);
	}
	if (count_falsefleet > 0) {
		resShipsArr.push(`${count_falsefleet} FALSE-FLEET`);
	}
	resShips.textContent = resShipsArr.join(", ");
}