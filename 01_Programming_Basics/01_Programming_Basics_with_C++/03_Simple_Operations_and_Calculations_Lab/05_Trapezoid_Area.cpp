#include <iostream>
#include <string>

using namespace std;
int main() {
  double b1;
  double b2;
  double h;
  cin >> b1 >> b2 >> h;

  double res = (b1 + b2) * h / 2;

  cout << res << endl;

  return 0;
}