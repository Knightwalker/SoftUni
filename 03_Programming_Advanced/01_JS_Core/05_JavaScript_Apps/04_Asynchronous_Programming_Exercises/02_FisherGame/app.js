let loadBtn = document.querySelector("button.load");
let addBtn = document.querySelector("button.add");
loadBtn.addEventListener("click", loadAllCatches);
addBtn.addEventListener("click", createCatch);

let catchesEl = document.getElementById("catches");
catchesEl.style.width = "100%";

function loadAllCatches() {
    catchesEl.innerHTML = "";

    fetch("https://fisher-game.firebaseio.com/catches.json")
    .then(response => {
        if (response.status > 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        
        for (let key in data) {
            let item = data[key];
            //console.log(key);
            //console.log(item);

            let divCatch = document.createElement("div");
            divCatch.className = "catch";
            divCatch.setAttribute("data-id", key);
            divCatch.innerHTML = '<label>Angler</label>'
                          + `<input type="text" class="angler" value="${item.angler}">`
                          + '<hr>'
                          + '<label>Weight</label>' 
                          + `<input type="number" class="weight" value="${item.weight}">`
                          + '<hr>'
                          + '<label>Species</label>'
                          + `<input type="text" class="species" value="${item.species}">`
                          + '<hr>'
                          + '<label>Location</label>'
                          + `<input type="text" class="location" value="${item.location}">`
                          + '<hr>'
                          + '<label>Bait</label>'
                          + `<input type="text" class="bait" value="${item.bait}">`
                          + '<hr>'
                          + '<label>Capture Time</label>'
                          + `<input type="number" class="captureTime" value="${item.captureTime}">`
                          + '<hr>'
                          + '<button class="update" onclick="updateCatch()">Update</button>'
                          + '<button class="delete" onclick="deleteCatch()">Delete</button>'
                          ;
            catchesEl.appendChild(divCatch);
        }
    });

}
function createCatch() {
    let validData = true;
    let anglerEl = document.querySelector("#addForm > input.angler");
    let weightEl = document.querySelector("#addForm > input.weight");
    let speciesEl = document.querySelector("#addForm > input.species");
    let locationEl = document.querySelector("#addForm > input.location");
    let baitEl = document.querySelector("#addForm > input.bait");
    let timeEl = document.querySelector("#addForm > input.captureTime");
    if (anglerEl.value == "" || anglerEl.value == "this cannot be empty!") {
        anglerEl.value = "this cannot be empty!";
        anglerEl.style.border = "2px solid red";
        validData = false;
    } else {
        anglerEl.style.border = "1px solid #ccc";
    }
    if (weightEl.value == "" || weightEl.value == -1) {
        weightEl.value = -1;
        weightEl.style.border = "2px solid red";
        validData = false;
    } else {
        weightEl.style.border = "1px solid #ccc";
    }
    if (speciesEl.value == "" || speciesEl.value == "this cannot be empty!") {
        speciesEl.value = "this cannot be empty!";
        speciesEl.style.border = "2px solid red";
        validData = false;
    } else {
        speciesEl.style.border = "1px solid #ccc";
    }
    if (locationEl.value == "" || locationEl.value == "this cannot be empty!") {
        locationEl.value = "this cannot be empty!";
        locationEl.style.border = "2px solid red";
        validData = false;
    } else {
        locationEl.style.border = "1px solid #ccc";
    }
    if (baitEl.value == "" || baitEl.value == "this cannot be empty!") {
        baitEl.value = "this cannot be empty!";
        baitEl.style.border = "2px solid red";
        validData = false;
    } else {
        baitEl.style.border = "1px solid #ccc";
    }
    if (timeEl.value == "" || timeEl.value == -1) {
        timeEl.value = -1;
        timeEl.style.border = "2px solid red";
        validData = false;
    } else {
        timeEl.style.border = "1px solid #ccc";
    }

    if (!validData) { return; }

    let data = { 
        angler: anglerEl.value, 
        weight: weightEl.value, 
        species: speciesEl.value, 
        location: locationEl.value, 
        bait: baitEl.value, 
        captureTime: timeEl.value
    };

    fetch("https://fisher-game.firebaseio.com/catches.json", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response)); 
      alert("Item was added ! Reload the view!");  
    })
    .catch(error => console.error('Error:', error));
}

function updateCatch() {
    console.log(event.currentTarget.parentNode);
    let id = event.currentTarget.parentNode.getAttribute("data-id");
    
    let validData = true;
    let anglerEl = event.currentTarget.parentNode.querySelector("#catches > div > input.angler");
    let weightEl = event.currentTarget.parentNode.querySelector("#catches > div > input.weight");
    let speciesEl = event.currentTarget.parentNode.querySelector("#catches > div> input.species");
    let locationEl = event.currentTarget.parentNode.querySelector("#catches > div > input.location");
    let baitEl = event.currentTarget.parentNode.querySelector("#catches > div > input.bait");
    let timeEl = event.currentTarget.parentNode.querySelector("#catches > div > input.captureTime");
    if (anglerEl.value == "" || anglerEl.value == "this cannot be empty!") {
        anglerEl.value = "this cannot be empty!";
        anglerEl.style.border = "2px solid red";
        validData = false;
    } else {
        anglerEl.style.border = "1px solid #ccc";
    }
    if (weightEl.value == "" || weightEl.value == -1) {
        weightEl.value = -1;
        weightEl.style.border = "2px solid red";
        validData = false;
    } else {
        weightEl.style.border = "1px solid #ccc";
    }
    if (speciesEl.value == "" || speciesEl.value == "this cannot be empty!") {
        speciesEl.value = "this cannot be empty!";
        speciesEl.style.border = "2px solid red";
        validData = false;
    } else {
        speciesEl.style.border = "1px solid #ccc";
    }
    if (locationEl.value == "" || locationEl.value == "this cannot be empty!") {
        locationEl.value = "this cannot be empty!";
        locationEl.style.border = "2px solid red";
        validData = false;
    } else {
        locationEl.style.border = "1px solid #ccc";
    }
    if (baitEl.value == "" || baitEl.value == "this cannot be empty!") {
        baitEl.value = "this cannot be empty!";
        baitEl.style.border = "2px solid red";
        validData = false;
    } else {
        baitEl.style.border = "1px solid #ccc";
    }
    if (timeEl.value == "" || timeEl.value == -1) {
        timeEl.value = -1;
        timeEl.style.border = "2px solid red";
        validData = false;
    } else {
        timeEl.style.border = "1px solid #ccc";
    }

    if (!validData) { return; }

    let data = { 
        angler: anglerEl.value, 
        weight: weightEl.value, 
        species: speciesEl.value, 
        location: locationEl.value, 
        bait: baitEl.value, 
        captureTime: timeEl.value
    };

    fetch("https://fisher-game.firebaseio.com/catches/id.json", {
        method: 'PUT', 
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response)); 
      alert("Item was edited! Reload the view!");  
    })
    .catch(error => console.error('Error:', error));

}
function deleteCatch() {
    let id = event.currentTarget.parentNode.getAttribute("data-id");
    event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);

    var data = null;
    var xhr = new XMLHttpRequest();    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        alert("Item was deleted!");  
      }
    });
    
    xhr.open("DELETE", `https://fisher-game.firebaseio.com/catches/${id}.json`);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}