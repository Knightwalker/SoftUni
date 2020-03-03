function solve(){
 
   let color = "rgb(65, 63, 94)";
   let tds = document.querySelectorAll('td');
   let trs = document.querySelectorAll('tr');

   for (let i = 0; i < tds.length; i++) {
      tds[i].addEventListener("click", function(e) {
         
         if (e.currentTarget.parentElement.style.backgroundColor == "" || e.currentTarget.parentElement.style.backgroundColor == null) {
            for (let j = 1; j < trs.length; j++) {
               trs[j].style.backgroundColor = "";
            }
            e.currentTarget.parentElement.style.backgroundColor = color;
         } else {
            e.currentTarget.parentElement.style.backgroundColor = "";
         }
         
      });
   }
   
}