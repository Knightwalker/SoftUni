function solve() {

    let expressionOutputElement = document.getElementById("expressionOutput");
    let resultOutputElement = document.getElementById("resultOutput");
    let validator = false;

    Array.from(document.getElementsByTagName('button')).forEach((button) => {
		button.addEventListener('click', clickEvent);
	});

    function clickEvent(e) {
    	let input = e.target.value;

    	console.log(input);
	
		if (input.match(/[0-9]/gm) || input == ".") {
			expressionOutputElement.textContent += input;
		} else {
			if (input == "Clear") {
				expressionOutputElement.textContent = "";
				resultOutputElement.textContent = "";
			} else if (input == "=") {
				doMath();
			} else {
				expressionOutputElement.textContent += " " + input + " ";	
			}
			
		}
    }

    function doMath() {
    	let temp = expressionOutputElement.textContent.split(" ");
    	let arr = temp.filter(temp => temp.length > 0);
    	let leftOperand = 0;
    	let rightOperand = 0;
    	let res = 0;

    	console.log(arr);
    	if (arr.length == 3) { 
    		if (arr[0].match(/[0-9]+/gm) || arr[0].match(/[0-9]+[.[0-9]+]?/gm)) {
    		    if (arr[2].match(/[0-9]+/gm) || arr[2].match(/[0-9]+[.[0-9]+]?/gm)) {
    				if (arr[1] == "+" || arr[1] == "-" || arr[1] == "*" || arr[1] == "/") {
    					validator = true;	
    				}
    		    }	 
    		}	
    	} 

    	if (validator) {
    		leftOperand = Number(arr[0]);
    		rightOperand = Number(arr[2]);
    		operator = arr[1];

    		if (operator == "+") {
    			res = leftOperand + rightOperand;
    		} else if (operator == "-") {
    			res = leftOperand - rightOperand;
    		} else if (operator == "*") {
    			res = leftOperand * rightOperand;
    		} else if (operator == "/") {
    			res = leftOperand / rightOperand;
    		}

    		resultOutputElement.textContent = res;

    	} else {
    		resultOutputElement.textContent = "NaN";
    	}
    	validator = false;

    }

}