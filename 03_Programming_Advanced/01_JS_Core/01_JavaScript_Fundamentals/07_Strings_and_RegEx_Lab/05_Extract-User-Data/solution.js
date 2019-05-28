function solve() {

    let input = document.getElementById("arr").value;
    let resultElement = document.getElementById("result");
    let inputArr = JSON.parse("[" + input + "]")[0];
    
    ExtractUserData(inputArr);
    
    function ExtractUserData(inputArr) {
        const pattern = /^([A-Z]([a-z]+)?[ ][A-Z]([a-z]+)?)[\s](((\+359)[-][0-9]+[-][0-9]+[-][0-9]+)|((\+359)[\s][0-9]+[\s][0-9]+[\s][0-9]+))[\s]([a-z]+[\@][a-z]+[\.][a-z]{2,3})$/gm;
                       
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].match(pattern)) {
                let matchedObj = pattern.exec(inputArr[i]);
                //console.log(matchedObj.groups.name);
                //console.log(matchedObj.groups.phone);
                //console.log(matchedObj.groups.email);
                
                let pname = document.createElement("p");
                pname.textContent = "Name: " + matchedObj[1];
                resultElement.appendChild(pname);
                
                let pphone = document.createElement("p");
                pphone.textContent = "Phone Number: " + matchedObj[4];
                resultElement.appendChild(pphone);
                
                let pemail = document.createElement("p");
                pemail.textContent = "Email: " + matchedObj[9];
                resultElement.appendChild(pemail);
                
                let pline = document.createElement("p");
                pline.textContent = "- - -";
                resultElement.appendChild(pline);
            } else {
                let pinvalid = document.createElement("p");
                pinvalid.textContent = "Invalid data";
                resultElement.appendChild(pinvalid);
                
                let pline = document.createElement("p");
                pline.textContent = "- - -";
                resultElement.appendChild(pline);
            }         
            
        }
        
    }
    
}