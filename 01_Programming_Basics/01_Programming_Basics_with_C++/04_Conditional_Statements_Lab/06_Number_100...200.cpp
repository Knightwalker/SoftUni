#include <iostream>
using namespace std;

int main() {
  double n;
  string msg;
  cin >> n;

if (n < 100) {
  msg = "Less than 100";
}
else if (n >= 100 && n <= 200) {
  msg = "Between 100 and 200";
}
else if (n > 200) {
  msg = "Greater than 200";
}
  
  cout << msg << endl;
  return 0;
}
