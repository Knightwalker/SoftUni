function solve(args) {

  let cats = [];

  class Cat {
    constructor (name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      return "Meow";
    }
  }

  for (let i = 0; i < args.length; i++) {
    let catData = args[i].split(' ');
    let name, age;
    [name, age] = [catData[0], catData[1]];
    cats.push(new Cat(name,age));
  }

  for (let cat of cats) {
    console.log(`${cat.name}, age ${cat.age} says ${cat.meow()}`)
  }
  
}

//solve(['Mellow 2', 'Tom 5']);