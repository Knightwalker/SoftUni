function subSum(arr, begin, end) {

  if (!Array.isArray(arr)) { return NaN; }
  if (begin < 0) { begin = 0; }
  if (end > arr.length) { end = arr.length - 1; }
  if (arr.length === 0) { return 0; }

  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += Number(arr[i]);
  }
  return sum;

}