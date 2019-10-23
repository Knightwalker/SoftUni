function solve(args) {

  let registerDict = [];

  for (let i = 0; i < args.length; i++) {
    let input = args[i].split(", ");
    let nameWithNoise = input[0];
    let gradeWithNoise = input[1];
    let scoreWithNoise = input[2];
    let nameWithNoiseArr = nameWithNoise.split(": ");
    let gradeWithNoiseArr = gradeWithNoise.split(": ");
    let scoreWithNoiseArr = scoreWithNoise.split(": ");
    let name = nameWithNoiseArr[1];
    let grade = gradeWithNoiseArr[1];
    let score = scoreWithNoiseArr[1];

    index = registerDict.findIndex(x => x.key == grade);
    if (index == -1) {
      if (score >= 3) {
        registerDict.push({
          key: grade,
          val: [{
            name: name,
            score: score,
            pass: true
          }]
        });
      } else {
        registerDict.push({
          key: grade,
          val: [{
            name: name,
            score: score,
            pass: false
          }]
        });
      }
    } else if (index >= 0) {
      if (score >= 3) {
        registerDict[index].val.push({
          name: name,
          score: score,
          pass: true
        });
      } else {
        registerDict[index].val.push({
          name: name,
          score: score,
          pass: false
        });
      }
    }

  } // END For...loop

  registerDict.sort(function(a, b){
    if (Number(a.key) > Number(b.key)) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let grade of registerDict) {
    console.log(++grade.key + " Grade ");

    let students = grade.val.filter(x => x.pass == true);
    let studentsNames = [];
    for (let i = 0; i < students.length; i++) {
      studentsNames.push(students[i].name);
    }

    let totalScore = 0;
    let count = 0;
    for (let i = 0; i < students.length; i++) {
      totalScore += Number(students[i].score);
      count++;
    }

    console.log("List of students: " + studentsNames.join(", "));
    console.log("Average annual grade from last year: " + (totalScore / count).toFixed(2));
    console.log();

  }

}

solve([
  'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
  'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
  'Student name: George, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
  'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
  'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
  'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
  'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
  'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
  'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
  'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
  'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]
);