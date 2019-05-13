function USDToBGN([arg1]) {
	let usd = parseFloat(arg1);
	let bgn = usd * 1.79549;
	let fixedBgn = bgn.toFixed(2);
	console.log("BGN = " + fixedBgn);
}
