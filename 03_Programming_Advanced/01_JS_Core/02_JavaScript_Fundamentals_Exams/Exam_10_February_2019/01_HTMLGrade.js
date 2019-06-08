function solve(examPoints,homework,totalHomeworks){
    let maxPoints=100;
    let examPointsTotal=400;
    const percentOfExam=0.9;
    let examResult=(examPoints/examPointsTotal)*100;
    let resultFromExam= examResult*percentOfExam;
    let bonus=(homework/totalHomeworks);
    let totalBonus=10*bonus;
    let total=resultFromExam+totalBonus;
 
    if(examPoints===examPointsTotal){
         let FinalGrade=6;
         return FinalGrade.toFixed(2);
    }
    let grade = 3 + 2 * (total-maxPoints / 5) / (maxPoints / 2);
 
    if(grade<3.00){
        let FinalGrade=2;
        return FinalGrade.toFixed(2);
    }
    if(grade>6.00){
        let FinalGrade=6;
         return FinalGrade.toFixed(2);
    }
    return grade.toFixed(2);
}