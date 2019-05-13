function CurrencyConverter(arg) {
	let n = Number(arg[0]);
	let inCurrency = arg[1];
	let outCurrency = arg[2];

	let bgnAmount = 0;
	let outAmount = 0;

	if      (inCurrency == "BGN") {bgnAmount = n;}
	else if (inCurrency == "USD") {bgnAmount = n * 1.79549;}
	else if (inCurrency == "EUR") {bgnAmount = n * 1.95583;}
	else if (inCurrency == "GBP") {bgnAmount = n * 2.53405;}

	if      (outCurrency == "BGN") {outAmount = bgnAmount;}
	else if (outCurrency == "USD") {outAmount = bgnAmount / 1.79549;}
	else if (outCurrency == "EUR") {outAmount = bgnAmount / 1.95583;}
	else if (outCurrency == "GBP") {outAmount = bgnAmount / 2.53405;}

	let res = outAmount.toFixed(2);
	console.log("Result = " + res);
}