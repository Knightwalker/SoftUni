function CountWordsInAText(str) {
  const regex = /[A-Za-z0-9_]+/gm;
  let m;
  let res = {};

  while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
          //console.log(`Found match, group ${groupIndex}: ${match}`);

          if (!res[match]) {
            res[match] = 0;
          }
          res[match]++;

      });
  }

  console.log(JSON.stringify(res));

}

//CountWordsInAText("Far too slow, you're far too slow.");
//CountWordsInAText("JS devs use Node.js for server-side JS.-- JS for devs");