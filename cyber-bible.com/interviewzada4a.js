
function sortNums(arr) { arr.sort((a, b) => a - b); }

// Test
let nums = [2, 15, -2, 4];
sortNums(nums);
console.log(nums);

if (JSON.stringify(nums) === "[-2,2,4,15]") {
  console.log("They are equal");
} 