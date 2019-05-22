function solve() {
  
	let sections = document.getElementsByTagName('section');
	console.log(sections[0]);
	let rightAnswers = 0;

	for (let section of sections) {
		let options = section.querySelectorAll('.answer-text');
		options[0].addEventListener('click', clickEvent);
		options[1].addEventListener('click', clickEvent);
	}

	function clickEvent(e) {
		let currentElement = e.target;
		console.log(currentElement);

		if (currentElement.textContent == "onclick") { 
			rightAnswers++; 
			sections[0].style.display = "none";
			sections[1].style.display = "block";
		} else if (currentElement.textContent == "onmouseclick") {
			sections[0].style.display = "none";
			sections[1].style.display = "block";
		} else if (currentElement.textContent == "JSON.toString()") {
			sections[1].style.display = "none";
			sections[2].style.display = "block";
		} else if (currentElement.textContent == "JSON.stringify()") {
			rightAnswers++; 
			sections[1].style.display = "none";
			sections[2].style.display = "block";
		} else if (currentElement.textContent == "A programming API for HTML and XML documents") {
			rightAnswers++; 
			sections[2].style.display = "none";
		} else if (currentElement.textContent == "The DOM is your source HTML") {
			sections[2].style.display = "none";
		}

		if (sections[0].style.display == "none" && sections[1].style.display == "none" && sections[2].style.display == "none") {
			document.getElementById("results").style.display = "block";
			let res = document.querySelector("#results > li > h1");
			if (rightAnswers == 3) {
				res.textContent = "You are recognized as top JavaScript fan!";	
			} else {
				res.textContent = `You have ${rightAnswers} right answers`;	
			}
		}

	}

}