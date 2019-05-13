function CatTrainingAttendance(args) {

let startingHour = Number(args[0]);
let attendanceHour = Number(args[1]);
let attendanceMinutes = Number(args[2]);
let weekDay = args[3];

let bonusPoints = 0.0;

  if (attendanceHour < startingHour) { 
    bonusPoints += 1.5; 
  } else if (attendanceHour == startingHour && attendanceMinutes <= 30) {
    bonusPoints +=  1;
  } else {
    bonusPoints +=  0.5;
  }             

  if (weekDay == "Monday" || weekDay == "Wednesday" || weekDay == "Friday") {
    bonusPoints += 0.6;
  } else if (weekDay == "Tuesday" || weekDay == "Thursday" || weekDay == "Saturday") {
    bonusPoints += 0.8;
  } else if (weekDay == "Sunday") {
    bonusPoints += 2;
  }
  
console.log(bonusPoints.toFixed(2));

}