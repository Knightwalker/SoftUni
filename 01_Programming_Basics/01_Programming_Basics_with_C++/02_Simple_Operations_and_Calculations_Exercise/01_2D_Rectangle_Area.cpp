#include <iostream>
#include <cmath>

using namespace std;
int main() {
  double x1;
  double y1;
  double x2;
  double y2;

  double x;
  double y;

  cin >> x1 >> y1>> x2 >> y2;

  x = abs(x1 - x2);
  y = abs(y1 - y2);

  double area = x * y;
  double perimeter = 2 * (x + y);

  cout << area << endl;
  cout << perimeter << endl;

  return 0;
}