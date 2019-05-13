#include <iostream>
#include <string>
using namespace std;

int main() {
  string input;
  int steps = 0;
  int totalSteps = 0;

  getline(cin, input);

  while(true) {
    if (input == "Going home") {
      getline(cin, input);
      steps = stoi(input);
      totalSteps += steps;
      break;
    }
    
    steps = stoi(input);
    totalSteps += steps;

    if (totalSteps >= 10000) { break; }
    
    getline(cin, input);
  }

  if (totalSteps >= 10000 ) {
    cout << "Goal reached! Good job!" << endl;
  } else {
    cout << 10000 - totalSteps << " more steps to reach goal." << endl;
  }

  return 0;

}