function getInfo() {
    let stopId = document.getElementById("stopId").value;
    let busesEl = document.getElementById("buses");
    busesEl.innerHTML = "";

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json `)
    .then(function(response) {
        if (response.status !== 200) {
            document.getElementById("stopName").textContent = "Error!";
            return;
        }

        response.json().then((data) => {
            document.getElementById("stopName").textContent = data.name;

            for (let buses in data.buses) {
                let busNumber = buses;
                let busTime = data.buses[buses];

                let li = document.createElement("li");
                li.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
                busesEl.appendChild(li);
            }

        })
    });
    
}