#include <iostream>
using namespace std;

int main() {
  int n = 0;
  
  while (true) {
    cin >> n;

    if (n > 0 && n <= 100) {
      break;
    } else {
      cout << "Invalid Number!" << endl;
    }
  }

  cout << "The number is: " << n << endl;

  return 0;
}