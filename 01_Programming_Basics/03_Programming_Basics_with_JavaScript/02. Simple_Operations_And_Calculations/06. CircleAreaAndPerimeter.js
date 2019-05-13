function CircleAreaAndPerimeter([arg1]) {
	let radius = parseFloat(arg1);
	let area = Math.PI * radius  * radius;
	let perimeter = 2 * Math.PI * radius;
	console.log("Area = " + area);
	console.log("Perimeter = " + perimeter);
}