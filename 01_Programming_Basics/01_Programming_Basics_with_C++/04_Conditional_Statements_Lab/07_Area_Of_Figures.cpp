#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string input;
  double n1;
  double n2;
  double res;

  cin >> input;

  if (input == "square") {
    cin >> n1;
    res = n1 * n1;
  } else if (input == "rectangle") {
    cin >> n1 >> n2;
    res = n1 * n2;
  } else if (input == "circle") {
    cin >> n1;
    res = 3.14159265359 * n1 * n1;
  } else if (input == "triangle") {
    cin >> n1 >> n2;
    res = n1 * n2 / 2;
  }
  
  cout << fixed << setprecision(3) << res << endl;
  return 0;
}
