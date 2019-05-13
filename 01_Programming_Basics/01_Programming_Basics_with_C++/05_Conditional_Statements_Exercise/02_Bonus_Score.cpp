#include <iostream>
using namespace std;

int main() {
  int n;
  double bonusPoints;
  cin >> n;

  if (n <= 100) {
    bonusPoints += 5;
  } else if (n > 100 && n <= 1000) {
    bonusPoints += n * 0.20; 
  } else if (n > 1000) {
    bonusPoints += n * 0.10;
  }

  if (n % 2 == 0) {
    bonusPoints += 1;
  } 
  if (n % 10 == 5) {
    bonusPoints += 2;
  }

  cout << bonusPoints << endl;
  cout << n + bonusPoints << endl;

  return 0;
}