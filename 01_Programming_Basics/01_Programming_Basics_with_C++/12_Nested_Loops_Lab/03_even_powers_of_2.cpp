#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double n;
  cin >> n;

  int num = 1;

  for (int i = 0; i <= n; i+= 2)
  {
      cout << num << endl;
      num *= 4;
  }

  return 0;
}