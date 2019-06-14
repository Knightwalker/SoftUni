function addItem() {
    let currentItemElement = document.getElementById("newItemText");
    let currentItemValue = document.getElementById("newItemText").value;
    let itemListElement = document.getElementById("items");

    let liElement = document.createElement("li");
    liElement.textContent = currentItemValue;
    itemListElement.appendChild(liElement);
    currentItemElement.value = "";
}