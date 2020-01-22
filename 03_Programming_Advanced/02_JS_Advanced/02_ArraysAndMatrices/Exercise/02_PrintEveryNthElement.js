function main(args) {

  let nthEl = Number(args.pop());
  for (let i = 0; i < args.length; i+= nthEl) {
    console.log(args[i]);
  }

}

main(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);