function subtract() {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let resultElement = document.getElementById("result");

    //let biggerN = Math.max(firstNumber, secondNumber);
    //let smallerN = Math.min(firstNumber, secondNumber);
    let result = firstNumber - secondNumber;
    resultElement.textContent = result;
}