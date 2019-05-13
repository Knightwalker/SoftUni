function RectangleArea([arg1, arg2, arg3, arg4]) {
	let x1 = parseFloat(arg1);
	let y1 = parseFloat(arg2);
	let x2 = parseFloat(arg3);
	let y2 = parseFloat(arg4);

	let x = Math.abs(x1 - x2);
	let y = Math.abs(y1 - y2);

	let area = x * y;
	let perimeter = 2 * (x + y);

	console.log("Area = " + area);
	console.log("Perimeter = " + perimeter);
}
