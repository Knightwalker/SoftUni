function deleteByEmail() {
    let inputValue = document.querySelector("body > label > input[type=text]").value; 
    document.querySelector("body > label > input[type=text]").value = ""; 
    let resultElement = document.getElementById("result");
    
    let rows = document.querySelectorAll("#customers > tbody > tr");
    let deleteChecker = false;
    for (let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        let currentElement = currentRow.getElementsByTagName("td"); // returns HTMLCollection from the 3 elements in the current row;
        
        if (currentElement[1].textContent == inputValue) {
            console.log(currentRow.parentElement.removeChild(currentRow));
            deleteChecker == true;
        }
        
    }

    if (deleteChecker) {
        resultElement.textContent = "Deleted."; 
    } else {
        resultElement.textContent = "Not found."; 
    }
   
    //console.log(inputValue);

}