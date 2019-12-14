function HumanizedNumber(str) {

  const regex = /[0-9]+/g;
  let m;

  while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
          //console.log(`Found match, group ${groupIndex}: ${match}`);
          console.log(ordinal_suffix_of(match));
      });
  }

  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }

}

//HumanizedNumber('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');