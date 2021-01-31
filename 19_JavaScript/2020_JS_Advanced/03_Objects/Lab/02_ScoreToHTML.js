function main(args) {

  args = JSON.parse(args);
  let html = "<table>\n"
           + "  <tr><th>name</th><th>score</th></tr>\n";

  for (let i = 0; i < args.length; i++) {
    let obj = args[i];
    let name = obj.name;
    let score = obj.score;
    html += `  <tr><td>${escapeHTML(name)}</td><td>${escapeHTML(score.toString())}</td></tr>\n`;
  }

  html += "</table>";
  console.log(html);

  function escapeHTML(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");
  }

}

main(JSON.stringify([{"name":"Pesho","score":479},{"name":"Gosho","score":205}]));