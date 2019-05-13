#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
  int badGrades = 0;
  int badGradesCounter = 0;
  double grade = 0.0;
  double sumGrades = 0.0;
  double countGrades = 0.0;
  string exercise;
  string lastExercise;

  cin >> badGrades;

  while(true) {
    cin.ignore();
    getline(cin, exercise);
    if (exercise == "Enough") {  
      double averageScore = sumGrades / countGrades;
      cout << "Average score: " << fixed << setprecision(2) << averageScore << endl;
      cout << "Number of problems: " << static_cast<int>(countGrades) << endl;
      cout << "Last problem: " << lastExercise << endl;
      break; 
    }

    cin >> grade;
    sumGrades += grade;
    countGrades++;

    lastExercise = exercise;

    if (grade <= 4) { badGradesCounter++; }
    if (badGradesCounter == badGrades) { 
      cout << "You need a break, " << badGrades  << " poor grades." << endl;
      break; 
    }

  }

}