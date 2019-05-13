function register() {
	let username = document.getElementById('username').value;	
	let password = document.getElementById('password').value;
	let email = document.getElementById('email').value;

	if (username && password && email.match(/(.+)@(.+).(com|bg)/gm)) { 
		let resultElement = document.querySelector('#result');

		let header = document.createElement('h1');
		header.textContent = 'Successful Registration!';
		let usernameTextNode = document.createTextNode('Username: ' + username);
		let emailTextNode = document.createTextNode('Email: ' + email);
		let passwordTextNode = document.createTextNode('Password: ' + '*'.repeat(password.length));

		resultElement.appendChild(header);
		resultElement.appendChild(usernameTextNode);
		resultElement.appendChild(document.createElement('br'));
		resultElement.appendChild(emailTextNode);
		resultElement.appendChild(document.createElement('br'));
		resultElement.appendChild(passwordTextNode);
	

		setTimeout(function(){
	    	while (resultElement.firstChild){
	        	resultElement.removeChild(resultElement.firstChild)
	       	}
	    }, 5000);
	}
}