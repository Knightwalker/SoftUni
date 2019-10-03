function solve(){
  let inputElement = document.getElementById('input').textContent;
    let inputElementArr = inputElement.split(/[.][ ]?/);
    inputElementArr = inputElementArr.filter(v => v != '');

    for (let i = 0; i < inputElementArr.length; i++) {
    console.log(i);
    let newInputElement = document.createElement('p');

      for (j = 0; j < 3; j++) {
      newInputElement.textContent += inputElementArr[i] + '. ';
      i++;
      }
      i--;

    document.getElementById("output").appendChild(newInputElement);

    }

    console.log(inputElementArr);
}