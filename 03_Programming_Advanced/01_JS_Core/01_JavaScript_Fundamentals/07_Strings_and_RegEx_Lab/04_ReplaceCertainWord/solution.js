function solve() {
    let word = document.getElementById("word").value;
    let text = document.getElementById("text").value;
    let result = document.getElementById("result");
    let arr = JSON.parse("[" + text + "]")[0];
    let resArr = [];
    
    ReplaceCertainWord(word, arr);
    
    function ReplaceCertainWord(word, arr) {
        let arrFirstString = arr[0];
        let replacedWordArr = arrFirstString.split(" ");
        let replacedWord = replacedWordArr[2];       
        let pattern = new RegExp(replacedWord, 'gi');

        for (let i = 0; i < arr.length; i++) {
            let currentStr = arr[i];
            let replacedStr = currentStr.replace(pattern, word);
            resArr.push(replacedStr);
        }
        
        for (let i = 0; i < resArr.length; i++) {
            let p = document.createElement("p");
            p.textContent = resArr[i];
            result.appendChild(p);
        }   
    }
    
}