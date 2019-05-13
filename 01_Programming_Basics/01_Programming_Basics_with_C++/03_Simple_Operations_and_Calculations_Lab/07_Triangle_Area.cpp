#include <iostream>
#include <iomanip>

using namespace std;
int main() {
  double a;
  double h;
  cin >> a >> h;

  double area = a * h / 2;

  cout << "Triangle area = " << fixed << setprecision(2) << area << endl;

  return 0;
}