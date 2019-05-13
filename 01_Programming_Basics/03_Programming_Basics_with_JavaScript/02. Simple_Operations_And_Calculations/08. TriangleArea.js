function TriangleArea([arg1, arg2]) {
	let a = parseFloat(arg1);
	let h = parseFloat(arg2);
	let area = a * h / 2;
	let fixedArea = area.toFixed(2)
	console.log("Area = " + area);
}
