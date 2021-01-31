function deleteByEmail() {
    let emailEl = document.querySelector("input");
    let email = emailEl.value;

    let tbodyEl = document.querySelector("tbody");
    let rows = tbodyEl.querySelectorAll("tr");
    
    let bDeleted = false;
    for (let i = 0; i < rows.length; i++) {
        let currentEmail = rows[i].getElementsByTagName("td")[1].textContent;

        if (email == currentEmail) {
            tbodyEl.removeChild(rows[i]);
            bDeleted = true;
        }
    }

    if (bDeleted) {
        document.getElementById("result").textContent = "Deleted.";
    } else {
        document.getElementById("result").textContent = "Not found.";
    }

}