#include <iostream>
using namespace std;

int main() {
  int n1, n2, n3;
  cin >> n1 >> n2 >> n3;

  int totalSec = n1 + n2 + n3;
  int minutes = totalSec / 60;
  int seconds = totalSec % 60;

  cout << minutes << ":";
  
  if (seconds < 10) {
    cout << "0";
  }

  cout << seconds << endl;

  return 0;
}