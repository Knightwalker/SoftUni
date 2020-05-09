function main(n, k) {
  let array = [];
  loop1:
  for (let i = 1; i < n; i++) {
    loop2:
    for (let j = 1; j < n; j++) {
      loop3:
      for (let p = 1; p <= k; p++) {
        loop4:
        for (let a = 1; a <= k; a++) {
          loop5:
          for (let z = 1; z <= n; z++) {
            if(z <= i || z <= j) {
              continue loop5;
            }
            let str = i + '' + j + '' + String.fromCharCode(p + 96) + '' + String.fromCharCode(a + 96) + '' + z;
            array.push(str);
          }
        }
      }
    }
  }

  array.sort(function(a, b) {
    return a.localeCompare(b)
  });

  console.log(array.join(' '));
}

main(3, 2);