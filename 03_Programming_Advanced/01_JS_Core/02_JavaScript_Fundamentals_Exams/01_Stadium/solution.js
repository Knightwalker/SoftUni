function solve() {
    

    let outputElement = document.getElementById("output");

    let buttonsCollection = document.getElementsByTagName("button");
    for (const button of buttonsCollection) {
    	button.addEventListener("click", function(e) {
    		let currentSeat = e.target;

    		console.log(currentSeat.parentElement.parentElement.parentElement.parentElement);
    		console.log(currentSeat);
    	});
	}


}