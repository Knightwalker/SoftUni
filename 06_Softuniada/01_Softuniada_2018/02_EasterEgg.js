function EasterEgg(args) {

  let n = Number(args[0]);
  let msg = "";
  let c1 = 1;

  let width = 5 * n;
  let height = 2 * n + 3;

  msg += ".".repeat((width - n)/2) + "*".repeat(n) + ".".repeat((width - n)/2) + "\n";

  for (i = 1; i <= n / 2; i++) {
    msg += ".".repeat(((width - n)/2) - i - i) + "*".repeat(i) + "+".repeat(n + i + i) + "*".repeat(i) + ".".repeat(((width - n)/2) - i - i) + "\n";
  }

  for (i = n / 2 + 1 ; i <= n; i++) {
    let mid = (5 * n) - 4 - (((width - n)/2) - i - i + c1) - (((width - n)/2) - i - i + c1) ;
    msg += ".".repeat(((width - n)/2) - i - i + c1) 
    msg += "*".repeat(2) 
    msg += "=".repeat(mid) 
    msg += "*".repeat(2) 
    msg += ".".repeat(((width - n)/2) - i - i + c1) 
    msg += "\n";
    
    if (i == n) {
    msg += ".".repeat(((width - n)/2) - i - i + c1) 
    msg += "*".repeat(2) 
    msg += "~".repeat((mid - 12)/ 2)
    msg += "HAPPY EASTER"
    msg += "~".repeat((mid - 12)/ 2) 
    msg += "*".repeat(2) 
    msg += ".".repeat(((width - n)/2) - i - i + c1) 
    msg += "\n";
    }
    
    c1++;
  }
  
  for (i = n ; i >= n / 2 + 1; i--) {
    let mid = (5 * n) - 4 - (((width - n)/2) - i - i + c1) - (((width - n)/2) - i - i + c1) ;
    msg += ".".repeat(((width - n)/2) - i - i + c1 - 1) 
    msg += "*".repeat(2) 
    msg += "=".repeat(mid + 2) 
    msg += "*".repeat(2) 
    msg += ".".repeat(((width - n)/2) - i - i + c1 - 1) 
    msg += "\n";
        
    c1--;
  }

  for (i = n / 2; i >= 1; i--) {
    msg += ".".repeat(((width - n)/2) - i - i) + "*".repeat(i) + "+".repeat(n + i + i) + "*".repeat(i) + ".".repeat(((width - n)/2) - i - i) + "\n";
  }

  msg += ".".repeat((width - n)/2) + "*".repeat(n) + ".".repeat((width - n)/2) + "\n";

  console.log(msg);

} 