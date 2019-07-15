let usernameEl = document.getElementById("username");
let repositoryEl = document.getElementById("repo");
let commitsEl = document.getElementById("commits");

function loadCommits() {
    let username = usernameEl.value;
    let repository = repositoryEl.value;
    commitsEl.innerHTML = "";

    fetch(`http://api.github.com/repos/${username}/${repository}/commits`)
    .then(response => {
        if (response.status == 404) {
            let liEl = document.createElement("li");
            liEl.textContent = `Error: ${response.status} (${response.statusText})`;
            commitsEl.appendChild(liEl);
            throw new Error(`${response.status} (${response.statusText})`);
        }
        return response.json();
    })
    .then(data => {

        for (const item in data) {
            let author = data[item].commit.author.name;
            let message = data[item].commit.message;
            let liEl = document.createElement("li");
            liEl.textContent = author + ": " + message;
            commitsEl.appendChild(liEl);
        }

    })
    .catch(error => {
       console.log(error);        
    });

}