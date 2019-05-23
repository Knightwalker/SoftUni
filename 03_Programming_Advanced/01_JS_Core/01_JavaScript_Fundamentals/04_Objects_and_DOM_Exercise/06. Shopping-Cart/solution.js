function solve() {
   
	let textarea = document.getElementsByTagName('textarea')[0];
	let buttons = document.getElementsByTagName('button');
	let productList = [];
	let totalPrice = 0;

	buttons[0].addEventListener('click', clickEvent);
	buttons[1].addEventListener('click', clickEvent);
	buttons[2].addEventListener('click', clickEvent);
	buttons[3].addEventListener('click', purchaseEvent);

	function clickEvent(e) {
		let button = e.target;
		let item = e.target.parentNode.parentNode;
		let name = item.getElementsByClassName("product-title")[0].textContent;
		let money = item.getElementsByClassName("product-line-price")[0].textContent;
		if (productList.indexOf(name) < 0) { productList.push(name); }
		totalPrice += Number(money);

		textarea.textContent += `Added ${name} for ${money} to the cart.\n`;
	}

	function purchaseEvent() {
		buttons[0].removeEventListener('click', clickEvent);
		buttons[1].removeEventListener('click', clickEvent);
		buttons[2].removeEventListener('click', clickEvent);
		buttons[3].removeEventListener('click', purchaseEvent);

		textarea.textContent += `You bought ${productList.join(", ")} for ${totalPrice.toFixed(2)}.`;
	}

}