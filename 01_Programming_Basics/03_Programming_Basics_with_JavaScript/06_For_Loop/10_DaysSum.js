function DaysSum(args) {
  let n = args[0];
  let date1 = args[1].split('-');
  let date2 = args[2].split('-');
 
  let day1 = Number(date1[0]);
  let month1 = Number(date1[1]);
  let year1 = Number(date1[2])

  let day2 = Number(date2[0]);
  let month2 = Number(date2[1]);
  let year2 = Number(date2[2])

 for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      if (day1 == 31) {
        day1 = 1;
      } else {
        day1 += 1;
      }
    } else {
      if (day2 == 31) {
        day2 = 1;
      } else {
        day2 += 1;
      }
    }
  }

  let realDate1 = new Date(`${month1}/${day1}/${year1}`).getDate();
  let realDate2 = new Date(`${month2}/${day2}/${year2}`).getDate();
  
  console.log(realDate1 + realDate2);
}