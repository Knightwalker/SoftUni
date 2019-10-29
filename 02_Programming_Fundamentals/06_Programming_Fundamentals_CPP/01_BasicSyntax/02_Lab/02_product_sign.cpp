#include <iostream>
using namespace std;

int main() {
  int x1 = 0;
  int x2 = 0;
  int x3 = 0;
  int product = 0;
  cin >> x1 >> x2 >> x3;
  product = x1 * x2 * x3;

  if (product >= 0) {
    cout << "+" << endl;
  } else {
    cout << "-" << endl;
  }

}