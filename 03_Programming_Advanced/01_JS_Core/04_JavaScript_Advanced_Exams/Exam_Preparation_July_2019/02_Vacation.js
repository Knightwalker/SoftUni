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

    let res = "";
    res += `${this.organizer} will take ${vacation.numberOfChildren} children on trip to ${this.destination}`;

    // this.kids.sort((a.grade, b.grade), function(){
    //   console.log(a.grade);
    //   console.log(b.grade);
    // });

    let currentKidNumber = 0;
    for (let gradesArr in this.kids) {
      res += "\nGrade: " + gradesArr;
      let currentArr = this.kids[gradesArr];
      for (let pairs in currentArr) {
        currentKidNumber++;
        res += `\n${currentKidNumber}. ${currentArr[pairs]}`;
      }
      currentKidNumber = 0;
    }

    return res;

  }

}