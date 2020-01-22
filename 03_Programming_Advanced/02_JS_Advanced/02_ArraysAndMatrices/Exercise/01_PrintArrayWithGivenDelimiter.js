function main(args) {

  let delimiter = args.pop();
  console.log(args.join(delimiter));

}

main(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);