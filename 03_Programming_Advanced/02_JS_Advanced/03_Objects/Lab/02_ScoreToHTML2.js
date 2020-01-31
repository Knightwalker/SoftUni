function main(input){

  String.prototype.htmlEscape = function(){
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
  };

  let parsedInput = JSON.parse(input);
  let html = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';

  for (const data of parsedInput) {
    html += `  <tr><td>${data.name.htmlEscape()}</td><td>${data.score}</td></tr>\n`;
  }

  html += '</table>';
  return html;
}

main(JSON.stringify([{"name":"Pesho","score":479},{"name":"Gosho","score":205}]));