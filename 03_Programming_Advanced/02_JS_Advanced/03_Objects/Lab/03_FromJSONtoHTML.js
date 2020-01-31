function main(input){
  String.prototype.htmlEscape = function(){
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
  };

  let parsedInput = JSON.parse(input);
  let html = "<table>\n   <tr>";

  for (const key in parsedInput[0]) {
    html += `<th>${key}</th>`;
  }
  html += "</tr>\n";

  for (let i = 0; i < parsedInput.length; i++) {
    let obj = parsedInput[i];
    html += "   <tr>";
    for (const key in obj) {
      html += `<td>${obj[key].toString().htmlEscape()}</td>`;
    }
    html += `</tr>\n`;
  }

  html += "</table>";
  console.log(html);
}

main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
main(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);