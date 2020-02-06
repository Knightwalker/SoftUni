function addItem() {
    
    let el_items = document.getElementById("items");
    let el_newItemText = document.getElementById("newItemText");
    
    let el_li = document.createElement("li");
    el_li.textContent = el_newItemText.value;
    el_items.appendChild(el_li);
    el_newItemText.value = "";

}