function solve() {

    let boundaries = document.getElementById("string").value;
    let text = document.getElementById("text").value;
    let result = document.getElementById("result");
    
    let message = "Message: " + getSubStrBetweenTwoStr(text, boundaries, boundaries);
    function getSubStrBetweenTwoStr(str, prefix, suffix) {
        let substring = str.match(prefix + "(.*)" + suffix);
        return substring[1];
    }
    
    //let messagePattern = new RegExp(`${keyword}(.+)${keyword}`, "gi");
    //let message = `Message: ${messagePattern.exec(text)[1]}`;
    
    let degreesPattern = /(north|east)[\s\S]*?(\d{2})[^,]*,[^,]*?(\d{6})/gi;
    let northDegrees = "";
    let eastDegrees = "";
    while ((match = degreesPattern.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === degreesPattern.lastIndex) {
            degreesPattern.lastIndex++;
        }

        if (match[1].toLowerCase() === "north") {
            northDegrees = `${match[2]}.${match[3]} N`;
        } else if (match[1].toLowerCase() === "east") {
            eastDegrees = `${match[2]}.${match[3]} E`;
        }  
        
    } 
    
    let northParagraph = document.createElement("p");
    northParagraph.textContent = northDegrees;
    result.appendChild(northParagraph);
    
    let eastParagraph = document.createElement("p");
    eastParagraph.textContent = eastDegrees;
    result.appendChild(eastParagraph);
    
    let messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    result.appendChild(messageParagraph);
    
}