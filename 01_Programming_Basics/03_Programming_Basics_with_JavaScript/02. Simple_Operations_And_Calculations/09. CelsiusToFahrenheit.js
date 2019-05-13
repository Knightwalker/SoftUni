function CelsiusToFahrenheit([arg1]) {
	let celsius = parseFloat(arg1);
	let fahrenheit = (celsius * 1.8) + 32;
	let fixedFahrenheit = fahrenheit.toFixed(2);
	console.log("Fahrenheit = " + fixedFahrenheit);
}
