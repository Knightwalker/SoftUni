#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string input = "";
  int number = 0;
  int maxNumber = -99999;
  int minNumber = 99999;

  while(true) {
    cin >> input;
    if (input == "END") { break; }
    number = stoi(input);

    if (number > maxNumber) {
      maxNumber = number;
    } 
    if (number < minNumber) {
      minNumber = number;
    }

  }

  cout << "Max number: " << maxNumber << endl;
  cout << "Min number: " << minNumber << endl;

  return 0;

}