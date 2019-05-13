function RadiansToDegrees([arg1]) {
	let radians = parseFloat(arg1);
	let degrees = 180 * radians / Math.PI;
	degrees = Math.round(degrees);
	console.log("Degrees = " + degrees);
}
