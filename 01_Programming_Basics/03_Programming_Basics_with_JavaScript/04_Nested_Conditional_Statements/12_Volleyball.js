function Volleyball(args) {
  let yearType = args[0].toLowerCase();
  let holidayWeekends = parseFloat(args[1]);
  let homeWeekends = parseFloat(args[2]);

  let yearWeekends = 48;
  let sofiaWeekends = yearWeekends - homeWeekends;

  let sofiaPlays = sofiaWeekends * 0.75 // This is equal to 3/4
  let holidayPlays = holidayWeekends * 0.666666667 // This is equal to 2/3
  let totalPlays = sofiaPlays + holidayPlays + homeWeekends;

  if (yearType == "leap") {
    console.log(Math.floor(totalPlays + (totalPlays * 0.15)));
  } else {
    console.log(Math.floor(totalPlays));  
  }
}