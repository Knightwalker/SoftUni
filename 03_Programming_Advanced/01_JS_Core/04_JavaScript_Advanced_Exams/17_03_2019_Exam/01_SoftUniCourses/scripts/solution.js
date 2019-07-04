function solve() {
   let checkboxJsFundEl = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(1) > input[type=checkbox]");
   let checkboxJsAdvancedEl = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(2) > input[type=checkbox]");
   let checkboxJsAppsEl = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(3) > input[type=checkbox]");
   let checkbocJsWebEl = document.querySelector("#availableCourses > div.courseBody > ul > li:nth-child(4) > input[type=checkbox]");

   let onsiteEl = document.querySelector("#educationForm > input[type=radio]:nth-child(2)");
   let onlineEl = document.querySelector("#educationForm > input[type=radio]:nth-child(4)");
   let signMeUpEl = document.querySelector("#availableCourses > div.courseFoot > button");

   let resUlEl = document.querySelector("#myCourses > div.courseBody > ul");
   let resCostEl = document.querySelector("#myCourses > div.courseFoot > p");

   signMeUpEl.addEventListener("click", function() {
      let fundamentalsModulePrice = 0;
      let webModulePrice = 0;
      let totalPrice = 0;
      let currentUlEl = document.createElement("ul");

      if (checkboxJsFundEl.checked) {
         fundamentalsModulePrice += 170;
         let liEl = document.createElement("li"); 
         liEl.textContent = "JS-Fundamentals";
         currentUlEl.appendChild(liEl);
      }
      if (checkboxJsAdvancedEl.checked) {
         if (checkboxJsFundEl.checked) {
            fundamentalsModulePrice += 162
         } else {
            fundamentalsModulePrice += 180;
         }
         let liEl = document.createElement("li"); 
         liEl.textContent = "JS-Advanced";
         currentUlEl.appendChild(liEl);
      }
      if (checkboxJsAppsEl.checked) {
         fundamentalsModulePrice += 190;
         let liEl = document.createElement("li"); 
         liEl.textContent = "JS-Applications";
         currentUlEl.appendChild(liEl);
      }
      if (checkbocJsWebEl.checked) {
         webModulePrice += 490;
         let liEl = document.createElement("li"); 
         liEl.textContent = "JS-Web";
         currentUlEl.appendChild(liEl);
      }

      if (checkboxJsFundEl.checked && checkboxJsAdvancedEl.checked && checkboxJsAppsEl.checked) {
         fundamentalsModulePrice -= fundamentalsModulePrice * 0.06;
         if (checkbocJsWebEl.checked) {
            let liEl = document.createElement("li"); 
            liEl.textContent = "HTML and CSS";
            currentUlEl.appendChild(liEl);
         }
      }

      console.log(fundamentalsModulePrice);

      totalPrice = fundamentalsModulePrice + webModulePrice;
      if (onlineEl.checked) {
         totalPrice -= totalPrice * 0.06;
      }

      console.log(totalPrice);

      resUlEl.innerHTML = currentUlEl.innerHTML;
      resCostEl.textContent = "Cost: " + Math.floor(totalPrice).toFixed(2) + " BGN";

   });
}

solve();