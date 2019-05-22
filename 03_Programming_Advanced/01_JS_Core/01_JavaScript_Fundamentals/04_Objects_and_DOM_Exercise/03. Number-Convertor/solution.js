function solve() {
    //add select options
    let selectElement = document.querySelector('#selectMenuTo');
    selectElement.innerHTML += '<option value="binary">Binary</option>';
    selectElement.innerHTML += '<option value="hexadecimal">Hexadecimal</option>';
 
    //add click event
    document.querySelector('button').addEventListener('click', clickEvent)
 
    function clickEvent() {
        //get values
        let decimalNumber = Number(document.querySelector('#input').value);
        let convertTo = selectElement.options[selectElement.selectedIndex].text;
 
        //convert
        let result;
        switch (convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
        }
 
        //append output
        document.querySelector('#result').value = result;
    }
}