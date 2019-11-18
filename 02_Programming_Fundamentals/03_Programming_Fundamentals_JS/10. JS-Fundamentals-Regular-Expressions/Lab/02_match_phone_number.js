function solve(args) {

  let input = args[0];
  const regex = /([\+359]{4}[\-][2][\-][\d]{3}[\-][\d]{4})\b|([\+359]{4}[\ ][2][\ ][\d]{3}[\ ][\d]{4})\b/g;
  let m;
  let result = [];
  
  while ((m = regex.exec(input)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      result.push(m[0]);
  }

  console.log(result.join(", "));

}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);