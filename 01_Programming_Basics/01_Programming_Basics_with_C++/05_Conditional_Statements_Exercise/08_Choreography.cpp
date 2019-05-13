#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

int main() {
  double dancers, steps, timeToLearn;
  cin >> dancers >> steps >> timeToLearn;

  double stepsToLearn = ceil(((dancers / timeToLearn) / dancers) * 100);
  double stepsEachDancer = stepsToLearn / steps;

  if (stepsToLearn <= 13) {
    cout << "Yes, they will succeed in that goal! " << fixed << setprecision(2) << stepsEachDancer << "%." << endl;
  } else {
    cout << "No, They will not succeed in that goal! Required " << fixed << setprecision(2) << stepsEachDancer << "% steps to be learned per day." << endl;
  }
}