#include <iostream>
using namespace std;

int main() {
  int x = 0;
  int y = 0;
  cin >> x >> y;

  while(y) {
    int t = y;
    y = x % y;
    x = t;
  }

  cout << x;

}