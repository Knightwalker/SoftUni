function solve() {

    let infoEl = document.getElementById("info");

    let baseUrl = "https://judgetests.firebaseio.com/schedule/";
    let currentStopId = "depot";
    let currentStop = "";
    
    function depart() {
        let url = baseUrl + currentStopId + ".json";
        fetch(url)
        .then(req => req.json())
        .then((data) => loadStop(data))
    }

    function arrive() {
        document.querySelector("span.info").textContent = "Arriving at " + currentStop.name;
        currentStopId = currentStop.next;
        document.getElementById("depart").disabled = false;
        document.getElementById("arrive").disabled = true;
    }

    function loadStop(data) {
        currentStop = data;
        document.querySelector("span.info").textContent = "Next stop " + currentStop.name;
        currentStopId = currentStop.next;
        document.getElementById("depart").disabled = true;
        document.getElementById("arrive").disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();