function solve() {
	let element_createTitle = document.getElementById('createTitle');
	let title = element_createTitle.value;
	
	let element_createContent = document.getElementById('createContent');
	let content = element_createContent.value;
	
	if (title && content) {
		let titleElement = document.createElement('h3');
		titleElement.textContent = title;
	
		let contentElement = document.createElement('p');
		contentElement.textContent = content;
	
		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);
		articleElement.appendChild(contentElement);
		
		document.getElementById("articles").appendChild(articleElement);
		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';
	}
}