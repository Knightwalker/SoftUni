function CatDiet(args) {

let fats = Number(args[0]);
let proteins = Number(args[1]);
let carbs = Number(args[2]); 
let calories = Number(args[3]);
let water = Number(args[4]);

let fatsFromCalories = ((fats / 100) * calories) / 9;
let proteinsFromCalories = ((proteins / 100) * calories) / 4;
let carbsFromCalories = ((carbs / 100) * calories) / 4;

let foodInGrams = fatsFromCalories + proteinsFromCalories + carbsFromCalories;
let caloriesForGramFood = calories / foodInGrams;
let res = caloriesForGramFood - (caloriesForGramFood * (water / 100));

console.log(res.toFixed(4));

}