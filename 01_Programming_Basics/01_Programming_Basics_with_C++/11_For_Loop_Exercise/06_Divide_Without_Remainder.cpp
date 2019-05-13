#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  int n = 0; 
  cin >> n;
  
  double p1 = 0.0;
  double p2 = 0.0;
  double p3 = 0.0;

  for (int i = 0; i < n; i++) {
    int number = 0;
    cin >> number;

    if (number % 2 == 0) {
      p1++;
    }
    if (number % 3 == 0) {
      p2++;
    }
    if (number % 4 == 0) {
      p3++;
    }

  }

  cout << fixed << setprecision(2) << (p1 / n) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (p2 / n) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (p3 / n) * 100 << "%" << endl;

  return 0;

}