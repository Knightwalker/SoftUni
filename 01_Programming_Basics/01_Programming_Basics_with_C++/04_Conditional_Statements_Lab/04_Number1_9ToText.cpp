#include <iostream>
using namespace std;

int main() {
  int n;
  string msg;
  cin >> n;

if (n >= 0 && n <= 9) {
    if (n == 0) {msg = "zero";}
    else if (n == 1) {msg = "one";}
    else if (n == 2) {msg = "two";}
    else if (n == 3) {msg = "three";}
    else if (n == 4) {msg = "four";}
    else if (n == 5) {msg = "five";}
    else if (n == 6) {msg = "six";}
    else if (n == 7) {msg = "seven";}
    else if (n == 8) {msg = "eight";}
    else if (n == 9) {msg = "nine";}
  } else {
    msg = "number too big";
  }

  cout << msg << endl;
  return 0;
}
