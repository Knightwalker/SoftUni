function attachEvents() {

    let btnSend = document.getElementById("submit");
    btnSend.addEventListener("click", function(){
        let authorEl = document.getElementById("author");
        let contentEl = document.getElementById("content");
        authorVal = authorEl.value;
        contentVal = contentEl.value;
        authorEl.value = "";
        contentEl.value = "";

        let data = {
            author: authorVal,
            content: contentVal,
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://rest-messanger.firebaseio.com/messanger.json', true);
        xhr.onload = function () {
            // do something to response
            console.log(this.responseText);
        };
        xhr.send(JSON.stringify(data));
    });

    let btnRefresh = document.getElementById("refresh");
    btnRefresh.addEventListener("click", function(){

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               let messagesEl = document.getElementById("messages");
               let messagesBody = "";
               let data = JSON.parse(xhttp.responseText);
               for(let item in data) {
                    let author = data[item].author;
                    let content = data[item].content;
                    
                    messagesBody += `${author}: ${content}\n`;
               }
               messagesEl.textContent = messagesBody;
            }
        };
        xhttp.open("GET", "https://rest-messanger.firebaseio.com/messanger.json", true);
        xhttp.send();
        
    });

}

attachEvents();