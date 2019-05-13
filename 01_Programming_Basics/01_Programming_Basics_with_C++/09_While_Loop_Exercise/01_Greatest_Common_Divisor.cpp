#include <iostream>
using namespace std;

int main() {
  int a = 0;
  int b = 0;

  cin >> a >> b;

  while (b != 0) {
    int oldB = b;
    b = a % b;
    a = oldB;
  }

  cout << a << endl;
        
  return 0;

}