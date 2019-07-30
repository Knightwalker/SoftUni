(function () {
     renderCatTemplate();

     function renderCatTemplate() {
         let template = document.getElementById("cat-template").innerHTML;
         let compiledTemplate = Handlebars.compile(template);
         context = {
             cats: window.cats
         }
         document.getElementById("allCats").innerHTML = compiledTemplate(context);
     }
 
})()
