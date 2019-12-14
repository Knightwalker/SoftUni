function DailyCalorieIntake(arg1, arg2) {
  let sex = arg1[0];
  let weight = Number(arg1[1]);
  let height = Number(arg1[2]);
  let age = Number(arg1[3]);
  let workouts = Number(arg2);

  let calories = 0;

  if (sex == "m") {
    calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
  } else if (sex == "f") {
    calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
  }

  if (workouts >= 1 && workouts <= 2) {
    calories = calories * 1.375;
  } else if (workouts >= 3 && workouts <= 5) {
    calories = calories * 1.55;
  } else if (workouts >= 6 && workouts <= 7) {
    calories = calories * 1.725;
  } else if (workouts >= 7) {
    calories = calories * 1.90;
  }

  console.log(Math.round(calories));

}

//DailyCalorieIntake(['f', 46, 157, 32], 5);