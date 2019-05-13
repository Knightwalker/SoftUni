#include <iostream>
using namespace std;

int main() {
  double n;
  cin >> n;
  string msg;

  if (n <= 10) {
    msg = "slow";
  } else if (n > 10 && n <= 50) {
    msg = "average";
  } else if (n > 50 && n <= 150) {
    msg = "fast";
  } else if (n > 150 && n <= 1000) {
    msg = "ultra fast";
  } else {
    msg = "extremely fast";
  }
  
  cout << msg << endl;
  
  return 0;
}