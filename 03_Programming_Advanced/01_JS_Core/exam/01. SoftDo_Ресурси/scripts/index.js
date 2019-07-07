// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){

    let btnSend = document.querySelector("#inputSection > div > button");

    btnSend.addEventListener("click", function(){
        let inputTextEl = document.querySelector("#inputSection > textarea");
        let inputText = inputTextEl.value;
        inputTextEl.value = "";

        let inputNameEl = document.querySelector("#inputSection > div > input[type=username]");
        let inputName = "Anonymous";
        if (inputNameEl.value.length >= 1) {
            inputName = inputNameEl.value;
        }
        
        let pendingQuestionEl = document.getElementById("pendingQuestions");

        let divName = '<div class="pendingQuestion">'
                    + '<img src="./images/user.png" width="32" height="32" />'
                    + `<span>${inputName}</span>`
                    + `<p>${inputText}</p>`
                    + '<div class="actions">'
                    + '<button class="archive">Archive</button>'
                    + '<button class="open">Open</button>'
                    + '</div>'
                    + '</div>'
                    ;

                    if (inputText.length >= 1) { pendingQuestionEl.innerHTML += divName; }
        
    });

    let openQuestionEl = document.getElementById("openQuestions");
    document.addEventListener("click", function(e){
        //console.log(e.target.parentElement.parentElement);
        //console.log(e.target.innerHTML);

        if (e.target.innerHTML == "Archive") {
            let parentClassName = e.target.parentElement.parentElement.className;
            //console.log(parentClassName);
            if (parentClassName == "pendingQuestion") {
                e.target.parentElement.parentElement.parentNode.removeChild(e.target.parentElement.parentElement);
            }
        } else if (e.target.innerHTML == "Open") {
            let name = e.target.parentElement.parentElement.querySelector("#pendingQuestions > div > span").innerHTML;
            let text = e.target.parentElement.parentElement.querySelector("#pendingQuestions > div > p").innerHTML;

            let divEl = document.createElement("div");
            divEl.className = "openQuestion";
                let imgEl = document.createElement("img");
                imgEl.src = "./images/user.png";
                divEl.appendChild(imgEl);
                let spanEl = document.createElement("span");
                spanEl.textContent = name;
                divEl.appendChild(spanEl);
                let pEl = document.createElement("p");
                pEl.textContent = text;
                divEl.appendChild(pEl);

                let divActionsEl = document.createElement("div");
                divActionsEl.className = "actions";
                    let buttonReplyEl = document.createElement("button");
                    buttonReplyEl.className = "reply";
                    buttonReplyEl.textContent = "Reply";
                    buttonReplyEl.addEventListener("click", btnReplyClick);
                divActionsEl.appendChild(buttonReplyEl);
                divEl.appendChild(divActionsEl);

                let divReplySection = document.createElement("div");
                divReplySection.className = "replySection";
                divReplySection.style.display = "none";
                    let inputEl = document.createElement("input");
                    inputEl.className = "replyInput";
                    inputEl.type = "text";
                    inputEl.placeholder = "Reply to this question here...";
                    divReplySection.appendChild(inputEl);

                    let buttonReply2El = document.createElement("button");
                    buttonReply2El.className = "replyButton";
                    buttonReply2El.textContent = "Send";
                    buttonReply2El.addEventListener("click", btnReply2Click);
                    divReplySection.appendChild(buttonReply2El);

                    let olEl = document.createElement("ol");
                    olEl.className = "reply";
                    olEl.type = "1";
                    divReplySection.appendChild(olEl);
                divEl.appendChild(divReplySection);

            e.target.parentElement.parentElement.parentNode.removeChild(e.target.parentElement.parentElement);
            openQuestionEl.appendChild(divEl);
   
        }
        
    });

    function btnReplyClick(e) {
       
        let replySectionEl = e.target.parentElement.parentElement.querySelector("#openQuestions > div > div.replySection")
        console.log(e.target.parentElement.parentElement);    
        let currentStyle = replySectionEl.style.display;
        if (currentStyle == "none") {
            replySectionEl.style.display = "block";
        } else if (currentStyle == "block") {
            replySectionEl.style.display = "none";
        }
    }
                
    function btnReply2Click(e) {
        let inputEl = document.querySelector("#openQuestions > div > div.replySection > input");
        let input = inputEl.value;
        inputEl.value = "";

        let olEl = e.target.parentElement.parentElement.querySelector("#openQuestions > div > div.replySection > ol")
        //console.log(olEl);  

        let liEl = document.createElement("li");
        liEl.textContent = input;
        olEl.appendChild(liEl);
    }

}
