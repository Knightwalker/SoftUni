function solve() {
	let visitsSoftUni = 1;
	let visitsGoogle = 2;
	let visitsYouTube = 3;
	let visitsWikipedia = 4;
	let visitsGmail = 5;
	let visitsStackoverflow = 6;

	document.querySelector('#exercise > div:nth-child(1) > a').addEventListener("click", counterSoftUni);
	document.querySelector('#exercise > div:nth-child(2) > a').addEventListener("click", counterGoogle);
	document.querySelector('#exercise > div:nth-child(3) > a').addEventListener("click", counterYouTube);
	document.querySelector('#exercise > div:nth-child(4) > a').addEventListener("click", counterWikipedia);
	document.querySelector('#exercise > div:nth-child(5) > a').addEventListener("click", counterGmail);
	document.querySelector('#exercise > div:nth-child(6) > a').addEventListener("click", counterStackoverflow);

	function counterSoftUni() {
		let elementSoftUni = document.querySelector('#exercise > div:nth-child(1) > span');
		visitsSoftUni += 1;
		elementSoftUni.textContent = `Visited: ${visitsSoftUni} times`;
	}
	function counterGoogle() {
		let elementGoogle = document.querySelector('#exercise > div:nth-child(2) > span');
		visitsGoogle += 1;
		elementGoogle.textContent = `Visited: ${visitsGoogle} times`;
	}
	function counterYouTube() {
		let elementYouTube = document.querySelector('#exercise > div:nth-child(3) > span');
		visitsYouTube += 1;
		elementYouTube.textContent = `Visited: ${visitsYouTube} times`;
	}
	function counterWikipedia() {
		let elementWikipedia = document.querySelector('#exercise > div:nth-child(4) > span');
		visitsWikipedia += 1;
		elementWikipedia.textContent = `Visited: ${visitsWikipedia} times`;
	}
	function counterGmail() {
		let elementGmail = document.querySelector('#exercise > div:nth-child(5) > span');
		visitsGmail += 1;
		elementGmail.textContent = `Visited: ${visitsGmail} times`;
	}
	function counterStackoverflow() {
		let elementStackoverflow = document.querySelector('#exercise > div:nth-child(6) > span');
		visitsStackoverflow += 1;
		elementStackoverflow.textContent = `Visited: ${visitsStackoverflow} times`;
	}

}