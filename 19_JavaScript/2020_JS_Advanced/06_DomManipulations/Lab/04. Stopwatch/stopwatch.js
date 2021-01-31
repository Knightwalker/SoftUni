function stopwatch() {
    
    let timeElement = document.getElementById("time");
    let startBtnElement = document.getElementById("startBtn");
    let stopBtnElement = document.getElementById("stopBtn");

    startBtnElement.addEventListener("click", startTimer);
    stopBtnElement.addEventListener("click", stopTimer);

    let timer = null;
    function startTimer() {
        startBtnElement.disabled = true;
        stopBtnElement.disabled = false;
        
        timeElement.textContent = `00:00`; // reset upon start
        let seconds = 0;
        timer = setInterval(function(){
            seconds++;
            let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSecond = ('0' + seconds % 60).slice(-2);
            timeElement.textContent = `${currentMinute}:${currentSecond}`;
        }, 1000);

    }

    function stopTimer() {
        startBtnElement.disabled = false;
        stopBtnElement.disabled = true;
        clearInterval(timer);
    }

}