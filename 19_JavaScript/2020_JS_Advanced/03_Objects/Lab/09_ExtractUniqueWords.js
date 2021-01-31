function main(args){
  
  let mySet = new Set();
  const regex = /\w+/gm;
  for (let i = 0; i < args.length; i++) {
    let line = args[i];

    let m;
    while ((m = regex.exec(line)) !== null) {        
       mySet.add(m[0].toLowerCase());
    }

  }

  console.log(Array.from(mySet).join(", "));

}

main(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
);