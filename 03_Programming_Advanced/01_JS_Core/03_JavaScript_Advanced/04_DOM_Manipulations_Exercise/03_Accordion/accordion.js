function toggle() {
    let extraElement = document.getElementById("extra");
    let spanElement = document.getElementsByClassName('button')[0];

    if (spanElement.textContent == "More") {
        spanElement.textContent = "Less";
        extraElement.style.display = "block";
    } else if (spanElement.textContent == "Less") {
        spanElement.textContent = "More";
        extraElement.style.display = "none";
    }

}