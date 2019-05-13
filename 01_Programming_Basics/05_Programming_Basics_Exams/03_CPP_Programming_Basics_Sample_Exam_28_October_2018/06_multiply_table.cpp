#include <iostream>
#include <string>
using namespace std;

int main() {
  int number = 0;
  cin >> number;

  int i3 = number % 10;
  number = number / 10;
  int i2 = number % 10;
  number = number / 10;
  int i1 = number;

  for (int a = 1; a <= i3; a++) {
    for (int b = 1; b <= i2; b++) {
      for (int c = 1; c <= i1; c++) {

        if (a > 0 && b > 0 && c > 0) {
          int res = a * b * c;
          cout << a << " * " << b << " * " << c << " = " << res << ";" << endl;
        }

      }
    }
  }

}