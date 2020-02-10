class List {
  constructor() {
    this.numbers = [];
    this.size = 0;
  }

  add(element) {
    this.numbers.push(element);
    this.size++;
    this.sort();
  }

  remove(index) {
    if (index >= 0 && index < this.numbers.length) {
      this.numbers.splice(index, 1);
      this.size--;
      this.sort();
    }
  }

  get(index) {
    if (index >= 0 && index < this.numbers.length) {
      return this.numbers[index];
    }
  }

  sort() {
    this.numbers.sort(function(a, b){
      return a - b;
    });
  }

}