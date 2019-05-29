function solve() {

    let input = document.getElementById("input").value;
    let result = document.getElementById("resultOutput");
    let classname = document.getElementsByClassName("boxes")[0];
    classname.style.display = "flex";
    
    BinaryDecoding(input);
    
    function BinaryDecoding(input) {
        let arrTemp = [];
        let arrStrTemp = "";
        let sum = 0;
        let temp = input;
        let res = ""; // end result
       
        while(true) {
            if ((temp.length) <= 1) { break; }
            for (let i = 0; i < temp.length; i++) {
                sum += Number(temp[i]);
            }
            temp = String(sum);
            sum = 0;
        }
        
        // filling the array
        for (let i = 0; i < input.length; i++) {
            arrTemp.push(input[i]);
        }
        
        // remove n elements from the begining and the end
        for (let i = 0; i < Number(temp); i++) {
            arrTemp.shift();
            arrTemp.pop();
        }
        
        for (let i = 0; i < arrTemp.length; i++) {
            arrStrTemp += arrTemp[i];
        }
        
        // split the ready string into segments of 8, and convert to decimal
        let newArr = splitEvery(arrStrTemp, 8);
        //console.log(newArr);
        for (let i = 0; i < newArr.length; i++) {
            let currentAscii = parseInt(newArr[i], 2);
            let currentLetter = String.fromCharCode(currentAscii);
            res += currentLetter;
        }
        res = res.split("").filter((d) => /[A-Za-z ]+/g.test(d)).join("");
        result.textContent = res;
   
    }
    
    function splitEvery(str, n)
    {
        let arr = new Array;
        for (var i = 0; i < str.length; i += n)
        {
            arr.push(str.substr(i, n));
        }
        return arr;
    }
    
}