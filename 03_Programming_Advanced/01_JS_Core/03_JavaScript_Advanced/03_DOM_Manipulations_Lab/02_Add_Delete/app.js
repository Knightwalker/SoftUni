function addItem() {
    let currentItemElement = document.getElementById("newText");
    let currentItemValue = document.getElementById("newText").value;
    currentItemElement.value = "";
    let itemListElement = document.getElementById("items");

    let liElement = document.createElement("li");
    liElement.textContent = currentItemValue;
    itemListElement.appendChild(liElement);

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', deleteItem);
    liElement.appendChild(deleteLink);

    function deleteItem() {
       let itemToDelete = this.parentElement;
       itemToDelete.parentElement.removeChild(itemToDelete);
    }
}