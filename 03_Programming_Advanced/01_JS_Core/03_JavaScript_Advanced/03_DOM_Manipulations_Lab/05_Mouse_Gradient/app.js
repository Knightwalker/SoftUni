function attachGradientEvents() {
    
    let resElement = document.getElementById("result");
    let grdElement = document.getElementById("gradient");

    grdElement.addEventListener("mousemove", function(e) {
        let rect = this.getBoundingClientRect();
        let leftPos = rect.left;
        let rightPos = rect.right;

        let grdPercent = (e.offsetX) / (rightPos - leftPos);
        grdPercent = Math.floor(grdPercent * 100);

        //console.log(`${leftPos} ${e.offsetX} ${rightPos}`);
        resElement.textContent = grdPercent + "%";
    });
   
}