function solve() {
   
	document.getElementById("send").addEventListener("click", MessageSend);

	function MessageSend() {
		let chatBox = document.getElementById("chat_input");

		let userMessageElement = document.createElement("div");
		userMessageElement.setAttribute("class", "message my-message");
		userMessageElement.textContent = chatBox.value;

		document.getElementById("chat_messages").appendChild(userMessageElement); 
		chatBox.value = "";
	}

}