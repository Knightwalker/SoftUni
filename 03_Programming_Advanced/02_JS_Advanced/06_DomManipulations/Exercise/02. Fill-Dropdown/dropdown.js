function addItem() {

    let newItemTextElement = document.getElementById("newItemText");
    let newItemValueElement = document.getElementById("newItemValue");

    let menuElement = document.getElementById("menu");

    let optionElement = document.createElement("option");
    optionElement.textContent = newItemTextElement.value;
    optionElement.value = newItemValueElement.value;
    menuElement.appendChild(optionElement);
    newItemTextElement.value = "";
    newItemValueElement.value = "";

}