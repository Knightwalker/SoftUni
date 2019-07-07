class Vacation {
  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = budget;
    this.kids = {}; // Default value
  }

  registerChild(name, grade, budget) {
    if (budget >= this.budget) {
      if (!this.kids[grade]) {
        this.kids[grade] = [];
      }
      let checkKid = false;
      for (let i = 0; i < this.kids[grade].length; i++) {
        let currentPair = this.kids[grade][i].split("-");
        let currentKid = currentPair[0];
        if (currentKid == name) {
          checkKid = true;
          break;
        }
      }
      if (!checkKid) {
        this.kids[grade].push(name + "-" + budget);
      } else {
        return `${name} is already in the list for this ${this.destination} vacation.`
      }
    
    } else {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }
  }

  removeChild(name, grade) {
    let checkKid = false;
    let index = -1;
    for (let i = 0; i < this.kids[grade].length; i++) {
      let currentPair = this.kids[grade][i].split("-");
      let currentKid = currentPair[0];
      if (currentKid == name) {
        checkKid = true;
        index = i;
        break;
      }
    }
    if (checkKid) {
      this.kids[grade].splice(index, 1);
    } else {
      return `We couldn't find ${name} in ${grade} grade.`
    }
  }

  get numberOfChildren() {
    let counter = 0;
    for (let gradesArr in this.kids) {
      let currentArr = this.kids[gradesArr];
      for (let pairs in currentArr) {
        counter++;
      }
    }

    return counter;
  }

  toString() {

    if (this.numberOfChildren <= 0) { return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`; }
    let res = "";
    res += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;

    let keys = Object.getOwnPropertyNames(this.kids);
    keys.sort(function(a, b){
      return a - b;  
    });

    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      res += "\nGrade: " + k;
      let currentKidsArr = this.kids[k];
      for (let j = 0; j < currentKidsArr.length; j++) {
        res += `\n${j + 1}. ${currentKidsArr[j]}`;
      }
      if (i == keys.length - 1) { res += '\n';}
    }

    return res;

    // let currentKidNumber = 0;
    // for (let gradesArr in sortedKids) {
    //   res += "\nGrade: " + gradesArr;
    //   let currentArr = sortedKids[gradesArr];
    //   for (let pairs in currentArr) {
    //     currentKidNumber++;
    //     res += `\n${currentKidNumber}. ${currentArr[pairs]}`;
    //   }
    //   currentKidNumber = 0;
    // }

    // return res;

  }

}