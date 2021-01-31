function main(args) {

  args.sort(function(a, b){
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });

  args.forEach(element => {
    console.log(element);
  });

}

main(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);