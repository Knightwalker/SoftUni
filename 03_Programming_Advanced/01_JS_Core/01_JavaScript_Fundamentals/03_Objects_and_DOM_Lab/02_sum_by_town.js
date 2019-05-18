function SumByTown(arr) {
  let res = {};

  for (let i = 0; i < arr.length; i+=2) {
    if (!res[arr[i]]) {
      res[arr[i]] = 0;
    }
    res[arr[i]] += Number(arr[i+1]);
  }

  console.log(JSON.stringify(res));

}

/*
SumByTown(["Sofia",
  "20",
  "Varna",
  "3",
  "Sofia",
  "5",
  "Varna",
  "4"
]);
*/