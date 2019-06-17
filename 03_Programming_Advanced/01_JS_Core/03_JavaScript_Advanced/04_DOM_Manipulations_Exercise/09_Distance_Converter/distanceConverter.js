function attachEventsListeners() {
    let inputEl = document.getElementById("inputDistance");
    let inputOptionsEl = document.getElementById("inputUnits");
    let outputEl = document.getElementById("outputDistance");
    let outputOptionsEl = document.getElementById("outputUnits");
    
    document.getElementById("convert").addEventListener("click", calc);
    function calc() {
        let inputVal = inputEl.value;
        let inputConv = inputOptionsEl.value;
        let outputConv = outputOptionsEl.value;

        let convertedToMeters = 0;
        if (inputConv == "km") { convertedToMeters = inputVal * 1000; }
        else if (inputConv == "m") { convertedToMeters = inputVal; }
        else if (inputConv == "cm") { convertedToMeters = inputVal / 100; }
        else if (inputConv == "mm") { convertedToMeters = inputVal / 1000; }
        else if (inputConv == "mi") { convertedToMeters = inputVal * 1609.344; }
        else if (inputConv == "yrd") { convertedToMeters = inputVal / 1.094; }
        else if (inputConv == "ft") { convertedToMeters = inputVal / 3.281; }
        else if (inputConv == "in") { convertedToMeters = inputVal / 39.37; }

        let res = 0;
        if (outputConv == "km") { res = convertedToMeters / 1000; }
        else if (outputConv == "m") { res = convertedToMeters; }
        else if (outputConv == "cm") { res = convertedToMeters * 100; }
        else if (outputConv == "mm") { res = convertedToMeters * 1000; }
        else if (outputConv == "mi") { res = convertedToMeters / 1609.344; }
        else if (outputConv == "yrd") { res = convertedToMeters * 1.094; }
        else if (outputConv == "ft") { res = convertedToMeters * 3.281; }
        else if (outputConv == "in") { res = convertedToMeters * 39.37; }

        outputEl.disabled = false;
        outputEl.value = res;
    }
   
}