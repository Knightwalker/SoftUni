function solve() {
    //background-color: rgb(114, 112, 112);
    //border-color:black;
    //color: white;

    let styleButton = document.querySelector("#dropdown");
    styleButton.addEventListener('click', function(e) {
        let box = document.querySelector("#box");
        let menu = document.querySelector("#dropdown-ul");
        
        if(menu.getAttribute('style') == 'display: none' || menu.getAttribute('style') == null) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }

        let lis = Array.from(menu.getElementsByTagName('li')).map(x => x.addEventListener('click', function(e) {
            let currentBox = e.currentTarget;
            box.style.backgroundColor = currentBox.textContent;
            box.style.color = 'black';
        }));
    });
}