#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double n;
  string msg;
  cin >> n;

  if (n == 1) {
    msg = "Monday";
  } else if (n == 2) {
    msg = "Tuesday";
  } else if (n == 3) {
    msg = "Wednesday";
  } else if (n == 4) {
    msg = "Thursday";
  } else if (n == 5) {
    msg = "Friday";
  } else if (n == 6) {
    msg = "Saturday";
  } else if (n == 7) {
    msg = "Sunday";
  } else {
    msg = "Error";
  }

  cout << msg << endl;

  return 0;
  
}