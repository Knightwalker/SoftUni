function loadRepos() {
   let xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("res").innerHTML = "<pre>" + xhttp.responseText + "</pre>";
       }
   };
   xhttp.open("GET", "https://api.github.com/users/testnakov/repos", true);
   xhttp.send();
}