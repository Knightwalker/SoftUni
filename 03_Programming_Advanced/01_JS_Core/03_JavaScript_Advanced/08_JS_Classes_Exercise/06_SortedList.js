class result {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  add(element) {
    this.list.push(element);
    this.size++;
    this.sort();  
  }

  remove(index) {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
      this.size--;
      this.sort();
    }
  }

  get(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list[index];
    }
  }

  sort() {
    this.list.sort(function(a, b){
      return a - b;
    });
  }

}