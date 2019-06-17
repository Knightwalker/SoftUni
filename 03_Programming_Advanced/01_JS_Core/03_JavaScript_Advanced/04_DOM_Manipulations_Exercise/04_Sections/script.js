function create(words) {
   
   let contentElement = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      let text = words[i];

      let pElement = document.createElement("p"); 
      pElement.textContent = text;
      pElement.style.display = "none";

      let divElement = document.createElement("div");
      divElement.addEventListener("click", function(e){
         e.target.firstChild.style.display = "block";
      });

      divElement.appendChild(pElement);
      contentElement.appendChild(divElement);
   }

}