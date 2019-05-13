#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
  int n = 0;
  double sum = 0;
  double totalSum = 0;

  cin >> n;

  for (int i = 0; i < n; i++) {
    cin >> sum;

    if (sum <= 0) {
      cout << "Invalid operation!" << endl;
      break;
    } else {
      cout << "Increase: " << fixed << setprecision(2) << sum << endl;
      totalSum += sum;
    }

  }

  cout << "Total: " << fixed << setprecision(2) << totalSum << endl;

  return 0;

}