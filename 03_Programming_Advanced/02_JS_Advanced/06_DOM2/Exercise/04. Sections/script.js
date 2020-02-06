function create(words) {
   
   let contentElement = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      let divElement = document.createElement("div");
      let pElement = document.createElement("p");
      pElement.textContent = words[i];
      pElement.style.display = "none";
      
      divElement.addEventListener("click", function(e) {
         let currentPElement = e.currentTarget.getElementsByTagName("p")[0];
         currentPElement.style.display = "block";
      })

      divElement.appendChild(pElement);
      contentElement.appendChild(divElement);
   }
   console.log(words);

}