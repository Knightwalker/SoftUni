function main(arg1) {

  let regex = /\w+/g;
  let result = [];
  let match = {};
  while ((match = regex.exec(arg1)) !== null) {
    result.push(match[0]);
  }

  console.log(result.join(", ").toUpperCase());

}

main("Functions in JS can be nested, i.e. hold other functions");