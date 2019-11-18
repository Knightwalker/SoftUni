function solve(args) {

  let input = args[0];
  const regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let m;
  let result = [];
  
  while ((m = regex.exec(input)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      result.push(m[0]);
  }

  console.log(result.join(' '));

}

solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);