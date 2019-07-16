let locationEl = document.getElementById("location");
let submitEl = document.getElementById("submit");
let currentEl = document.getElementById("current");
let upcomingEl = document.getElementById("upcoming");

submitEl.addEventListener("click", function(){
    let location = locationEl.value;
    locationEl.value = "";
    let locationName = "";
    let locationCode = "";
    
    fetch("https://judgetests.firebaseio.com/locations.json")
    .then(response => {
        if (response.status != 200) {
            throw new Error(`Custom Error: ${response.status}`);
        }
        return response.json();
    }).then(function(data) {
        // console.log("Fetch 1 Data");
        // console.log(data);
        let found = false;
        for(let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.name == location) {
                locationName = item.name;
                locationCode = item.code;
                found = true;
                break;
            }
        }

        if (found) { 
            document.getElementById("forecast").style.display = "block";
            currentEl.innerHTML = '<div class="label">Current conditions</div>';
            upcomingEl.innerHTML = '<div class="label">Three-day forecast</div>';
            fetchForecast(); 
            fetchUpcomming();
        }
        else {
            document.getElementById("forecast").style.display = "block";
            currentEl.innerHTML = '<div class="label">Current conditions</div>'
                                + '<div class="forecasts">Error: Invalid Input!</div>'
                                ;
            upcomingEl.innerHTML = '<div class="label">Three-day forecast</div>';
        }

    });
    
    function fetchForecast() {
        // console.log(locationName);
        // console.log(locationCode);

        fetch(`https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`)
        .then(response => {
            if (response.status != 200) {
                throw new Error(`Custom Error: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            // console.log("Fetch 2 Data");
            // console.log(data);
            let forecastsEl = document.createElement("div");
            forecastsEl.className = "forecasts";
                let conditionSymbol = document.createElement("span");
                conditionSymbol.className = "condition symbol";

                    let currentConditionStr = data.forecast.condition.toLowerCase().split(" ").join("");
                    if (currentConditionStr == "sunny") { conditionSymbol.innerHTML = "&#x2600;"; }
                    else if (currentConditionStr == "partlysunny") { conditionSymbol.innerHTML = "&#x26C5;"; }
                    else if (currentConditionStr == "overcast") { conditionSymbol.innerHTML = "&#x2601;"; }
                    else if (currentConditionStr == "rain") { conditionSymbol.innerHTML = "&#x2614;"; }
              
                let condition = document.createElement("span");
                condition.className = "condition";
                    let forecastData1 = document.createElement("span");  
                    forecastData1.className = "forecast-data"; 
                    forecastData1.textContent = data.name;         
                    let forecastData2 = document.createElement("span");            
                    forecastData2.className = "forecast-data";  
                    forecastData2.innerHTML = `${data.forecast.low}${"&#176;"}/${data.forecast.high}${"&#176;"}`; 
                    let forecastData3 = document.createElement("span");
                    forecastData3.className = "forecast-data";
                    forecastData3.textContent = data.forecast.condition; 
                condition.appendChild(forecastData1);
                condition.appendChild(forecastData2);
                condition.appendChild(forecastData3);
            forecastsEl.appendChild(conditionSymbol);
            forecastsEl.appendChild(condition);
            currentEl.appendChild(forecastsEl); 
        });
    }

    function fetchUpcomming() {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`)
        .then(response => {
            if (response.status != 200) {
                throw new Error(`Custom Error: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            // console.log("Fetch 3 Data");
            // console.log(data);

            let forecastsEl = document.createElement("div");
            forecastsEl.className = "forecasts-info";

            for(let key in data["forecast"]) {
                let item = data["forecast"][key];

                let upcomingEl2 = document.createElement("span");
                upcomingEl2.className = "upcoming";
                    let conditionSymbol = document.createElement("span");
                    conditionSymbol.className = "symbol";
                        let currentConditionStr = item.condition.toLowerCase().split(" ").join("");
                        if (currentConditionStr == "sunny") { conditionSymbol.innerHTML = "&#x2600;"; }
                        else if (currentConditionStr == "partlysunny") { conditionSymbol.innerHTML = "&#x26C5;"; }
                        else if (currentConditionStr == "overcast") { conditionSymbol.innerHTML = "&#x2601;"; }
                        else if (currentConditionStr == "rain") { conditionSymbol.innerHTML = "&#x2614;"; }

                    let forecastData1 = document.createElement("span");
                    forecastData1.className = "forecast-data";  
                    forecastData1.innerHTML = `${item.low}${"&#176;"}/${item.high}${"&#176;"}`; 

                    let forecastData2 = document.createElement("span");
                    forecastData2.className = "forecast-data";
                    forecastData2.textContent = item.condition; 
                upcomingEl2.appendChild(conditionSymbol);
                upcomingEl2.appendChild(forecastData1);
                upcomingEl2.appendChild(forecastData2);
                forecastsEl.appendChild(upcomingEl2);
            }

            upcomingEl.appendChild(forecastsEl);

        });
    }

});