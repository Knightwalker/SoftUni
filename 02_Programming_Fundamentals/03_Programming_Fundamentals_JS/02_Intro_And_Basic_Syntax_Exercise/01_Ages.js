function Ages(age) {
	let msg = "";

	if (age >= 0 && age <= 2) { msg = "baby"; }
	else if (age >= 3 && age <= 13) { msg = "child"; }
	else if (age >= 14 && age <= 19) { msg = "teenager"; }
	else if (age >= 20 && age <= 65) { msg = "adult"; }
	else if (age >= 66) { msg = "elder"; }

	console.log(msg);
}