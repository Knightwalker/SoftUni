#include <iostream>
#include <math.h>

using namespace std;
int main() {
  double rad;
  cin >> rad;

  double deg = 180 / 3.14159265 * rad;
  deg = round(deg);

  cout << deg << endl;

  return 0;
}