function PerfectNumber (arg1) {
  let arr = [];

  for (let i = 0; i < arg1.length; i++) {
    let n = arg1[i];

    if (n >= 1) {
      if (aliquotSum(n) == n && aliquotHalfSum(n) == n) {
        arr.push(n);
      }  
    }
    
  }

  // Output
  if (arr.length >= 1) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        res += arr[i] + ", ";  
      } else {
        res += arr[i] + "";
      }
    }
    console.log(res);
  } else {
    console.log("No perfect number");
  }

  // Function to calculate sum of all proper divisors 
  function aliquotSum(n) {
    let sum = 0; 
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        sum += i; 
      } 
    }
    return sum;
  }

  // Function to calculate half the sum of all proper divisors 
  function aliquotHalfSum(n) {
    let sum = 0; 
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        sum += i; 
      } 
    }
    sum += n;
    sum /= 2;
    return sum;
  }

}

//PerfectNumber([5, 6, 28]);
//PerfectNumber([5, 32, 82]);