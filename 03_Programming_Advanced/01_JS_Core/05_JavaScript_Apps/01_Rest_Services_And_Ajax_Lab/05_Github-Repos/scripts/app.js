function loadRepos() {
	
	let username = document.getElementById("username").value;
	let reposEl = document.getElementById("repos");
	reposEl.innerHTML = "";

	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				 // Typical action to be performed when the document is ready:
				 //let arr = JSON.parse(xhr.response);
				 //console.log(arr);

				 for (let item in arr) {
					 let li = document.createElement("li");
					 let a = document.createElement("a");
					 a.href = arr[item]["html_url"];
					 a.textContent = arr[item]["full_name"];
					 li.appendChild(a);
					 reposEl.appendChild(li);
				 }
		
			}
	};
	xhr.open("GET", `https://api.github.com/users/${username}/repos`, true);
	xhr.send();

}