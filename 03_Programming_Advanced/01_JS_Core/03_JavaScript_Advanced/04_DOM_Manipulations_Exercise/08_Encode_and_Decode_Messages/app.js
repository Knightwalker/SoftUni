function encodeAndDecodeMessages() {
    let sendAndEncodeBtn = document.getElementsByTagName('button')[0];
    let decodeAndReadBtn = document.getElementsByTagName('button')[1];
    let sendTextEl = document.getElementsByTagName('textarea')[0];
    let decodeTextEl = document.getElementsByTagName('textarea')[1];

    sendAndEncodeBtn.addEventListener("click", function(){
        let inputStr = sendTextEl.value;
        let encodedStr = "";
        sendTextEl.value = "";

        for (let i = 0; i < inputStr.length; i++) {
            encodedStr += String.fromCharCode(inputStr[i].charCodeAt(0) + 1);
        }

        decodeTextEl.value = encodedStr;
        
    });

    decodeAndReadBtn.addEventListener("click", function(){
        let inputStr = decodeTextEl.value;
        let decodedStr = "";

        for (let i = 0; i < inputStr.length; i++) {
            decodedStr += String.fromCharCode(inputStr[i].charCodeAt(0) - 1);
        }
        
        decodeTextEl.value = decodedStr;

    });
}

