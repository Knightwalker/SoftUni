function addItem() {

    let el_items = document.getElementById("items");
    let el_newText = document.getElementById("newText");

    let el_li = document.createElement("li");
    
    let el_a = document.createElement('a');
    el_a.href = '#';
    el_a.textContent = "[Delete]";
    el_a.addEventListener("click", function(e){
            let target = e.currentTarget;
            el_items.removeChild(target.parentElement);
    });
   
    el_li.textContent = el_newText.value;
    el_li.appendChild(el_a);
    el_items.appendChild(el_li);
    el_newText.value = "";

}