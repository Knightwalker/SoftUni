#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string name = "";
  double grade = 0;
  double sumGrade = 0;
  double counter = 0;

  cin >> name;
  
  while (true) {
    if (counter == 12) { break; }  

    cin >> grade;

    if (grade >= 4) {
      sumGrade += grade;
      counter++;
    }

  }

  cout << name << " graduated. Average grade: " << fixed << setprecision(2) << sumGrade / 12 << endl; 

  return 0;
  
}