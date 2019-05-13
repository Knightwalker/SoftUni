#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string name = "";
  double grade = 0;
  double sumGrade = 0;
  double counter = 0;
  double counterExcluded = 0;
  bool validateExcluded = false;

  cin >> name;
  
  while (true) {
    if (counter == 12) { break; }  
    if (counterExcluded == 2) { validateExcluded = true; break; }

    cin >> grade;

    if (grade >= 4) {
      sumGrade += grade;
      counter++;
    } else {
      counterExcluded++;
    }

  }

  if (validateExcluded == true) {
    cout << name << " has been excluded at " << counter + 1 << " grade" << endl;
  } else {
    cout << name << " graduated. Average grade: " << fixed << setprecision(2) << sumGrade / 12 << endl;     
  }

  return 0;

}