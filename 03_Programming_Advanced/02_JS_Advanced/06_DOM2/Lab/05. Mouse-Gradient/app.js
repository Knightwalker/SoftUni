function attachGradientEvents() {
    
    let gradientEl = document.getElementById("gradient");
    let resultEl = document.getElementById("result");

    gradientEl.addEventListener("mousemove", function(e){
        let xPos = e.offsetX;
        let grdPercent = (xPos) / 300;
        resultEl.textContent = Math.floor(grdPercent * 100) + "%";
    });

}