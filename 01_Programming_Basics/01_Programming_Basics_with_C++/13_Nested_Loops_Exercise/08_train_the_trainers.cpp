#include <iostream>
#include <string> 
#include <math.h> 
#include <iomanip>
using namespace std;

int main() {

    int n = 0;
    cin >> n;
    cin.ignore();

    double sumGrade = 0;
    double gradeEnd = 0;
    int counter = 0;

    while(true)
    {
      sumGrade = 0;
      string presentation = ""; 
      getline(cin, presentation);
  
      if(presentation == "Finish")
      {
        break;
      }

      for(int i = 0; i < n; i++)
      {
        double grades = 0.0;
        cin >> grades;
        cin.ignore();
        sumGrade += grades;
        gradeEnd += grades;
      }
      counter += n;
      cout << presentation << " - " << fixed << setprecision(2) << sumGrade / n << "." << endl;
    }

    cout << "Student's final assessment is " << fixed << setprecision(2) << gradeEnd / counter << "." << endl;

    return 0;
}