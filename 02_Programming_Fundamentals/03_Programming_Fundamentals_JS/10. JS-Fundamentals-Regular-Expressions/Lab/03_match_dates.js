function solve(input) {
  
  const regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let m;
  
  while ((m = regex.exec(input)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }

      let day = m.groups['day'];
      let month = m.groups['month'];
      let year = m.groups['year'];
      console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
      
  }

}

solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);