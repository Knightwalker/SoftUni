function solve() {
 
    let allInputs = Array.prototype.slice.call(document.querySelectorAll("tbody>tr>td>input"));
 
    let table = document.getElementsByTagName("table")[0];
    let checkPara = document.querySelector("#check>p");
   
    let buttons = document.getElementsByTagName("button");
    let checkButton = buttons[0];
    let clearButton = buttons[1];
 
    checkButton.addEventListener("click", () => {
        let validQue = valid();
        if (validQue) {
            table.style.border = "2px solid green";
            checkPara.style.color = "green";
            checkPara.innerHTML = "You solve it! Congratulations!";
        } else {
            table.style.border = "2px solid red";
            checkPara.style.color = "red";
            checkPara.innerHTML = "NOP! You are not done yet...";
        }
    });
 
    clearButton.addEventListener("click", () => {
        for (let input of allInputs) {
            input.value = "";
        }
 
        table.style.border = "none";
        checkPara.innerHTML = "";
    });
 
    function valid() {
 
        if (allInputs.some(x => x.value == "")) {
            return false;
        }
 
        if (allInputs.some(x => !["1", "2", "3"].includes(x.value))) {
            return false;
        }
 
        let board = [["","",""],["","",""],["","",""]];
 
        for (let i = 0; i < allInputs.length; i++){
            let x = i % 3;
            let y = (i - x) / 3;
            board[y][x] = allInputs[i].value;
            console.log(board[y][x]);
        };
 
        for (let row = 0; row < 3; row++){
            if (
                board[row][0] == board[row][1]
                || board[row][1] == board[row][2]
                || board[row][2] == board[row][0]
            ) {
                return false;
            }
        };
 
        for (let col = 0; col < 3; col++){
            if (
                board[0][col] == board[1][col]
                || board[1][col] == board[2][col]
                || board[2][col] == board[0][col]
            ) {
                return false;
            }
        };
 
        return true;
    }
}