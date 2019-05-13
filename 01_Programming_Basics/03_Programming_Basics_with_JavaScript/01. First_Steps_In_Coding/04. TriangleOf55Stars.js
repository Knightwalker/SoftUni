function TriangleOf55Stars() {
	let stars = "";
	for (let rows = 1; rows <= 10; rows++) { 
		for (let cols = 1; cols <= rows; cols++) {
			stars += "*";
		}
		stars += "\n";
	}
	console.log(stars)
}