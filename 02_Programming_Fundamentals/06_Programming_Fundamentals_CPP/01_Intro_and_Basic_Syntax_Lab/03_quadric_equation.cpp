#include <iostream>
#include <math.h>
using namespace std;

int main() {
  double a = 0;
  double b = 0;
  double c = 0;
  cin >> a >> b >> c;
  int Discriminant = (b * b) - (4 * a * c);

  // greater than 0 = 2 roots
  if (Discriminant > 0) {
    double x1 = ((b * (-1)) + sqrt(Discriminant)) / (2 * a);
    double x2 = ((b * (-1)) - sqrt(Discriminant)) / (2 * a);
    cout << x1 << " " << x2 << endl;

  // exactly 0 = 1 root
  } else if (Discriminant == 0) {
    double x = (b * (-1)) / (2 * a);
    cout << x << endl;

  // less than 0 = no roots
  } else if (Discriminant < 0) {
    cout << "no roots" << endl;
  }

  return 0;

}