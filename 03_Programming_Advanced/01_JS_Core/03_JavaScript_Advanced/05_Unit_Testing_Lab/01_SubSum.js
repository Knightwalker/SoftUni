function subsum(arr, startIndex, endIndex) {
    if (Array.isArray(arr) == false) { return NaN; }
    if (arr.length === 0) { return 0; }
    if (startIndex < 0) { startIndex = 0; }
    if (endIndex > arr.length) { endIndex = arr.length - 1; }
    
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
      sum += parseFloat(arr[i]);
    }
    return sum;
}

//subsum([10, 20, 30, 40, 50, 60], 3, 300);
//subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
//subsum([], 0, 0);