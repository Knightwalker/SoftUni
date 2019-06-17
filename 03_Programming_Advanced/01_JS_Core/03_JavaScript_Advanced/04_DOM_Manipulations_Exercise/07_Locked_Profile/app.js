function lockedProfile() {
    
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e){
            let parentDivElement = e.target.parentElement;
            let inputs = parentDivElement.getElementsByTagName("input");
            //console.log(inputs);
            let currentButton = e.target;
            let lockedCheck = inputs[0]; 
            let unlockedCheck = inputs[1]; 
            let nameArr = inputs[2].value.split(" "); 
            let username = `${nameArr[0].toLowerCase()}${nameArr[1]}`;
            //console.log(lockedCheck.checked);
            //console.log(unlockedCheck.checked);
            
            let currentUserHiddenField = document.getElementById(`${username}HiddenFields`);
            //console.log(currentButton.textContent);
            //console.log(currentUserHiddenField);
            if (unlockedCheck.checked == true && currentButton.textContent == "Show more") {
                currentUserHiddenField.style.display = "block";
                currentButton.textContent = "Hide it";
            } else if (unlockedCheck.checked == true && currentButton.textContent == "Hide it") {
                currentUserHiddenField.style.display = "none";
                currentButton.textContent = "Show more";
            }
            
        });
    }
    
}