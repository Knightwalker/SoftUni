function solve() {
   document.querySelector('#exercise > div:nth-child(2) > button').addEventListener("click", growingWord);
   let growingWordElement = document.querySelector('#exercise > p');
   let fontSize = 0;
   let color = "";

   function growingWord() {
   	if (fontSize == 0) {
   		fontSize = 2;
   	} else {
   		fontSize += 2;
   	}

   	if (growingWordElement.style.color == "") {
   		color = "blue";
   	} else if (growingWordElement.style.color == "blue") {
   		color = "green";
   	} else if (growingWordElement.style.color == "green") {
   		color = "red";
   	} else if (growingWordElement.style.color == "red") {
   		color = "blue";
   	}

   	growingWordElement.style.fontSize = fontSize + "px";
   	growingWordElement.style.color = color;
   }
}