function notify(message) {
    let notificationElement = document.getElementById("notification");
    
    notificationElement.textContent = message;
    notificationElement.style.display = "block";
    setTimeout(function() {
        notificationElement.textContent = "";
        notificationElement.style.display = "none";
    }, 2000);
}