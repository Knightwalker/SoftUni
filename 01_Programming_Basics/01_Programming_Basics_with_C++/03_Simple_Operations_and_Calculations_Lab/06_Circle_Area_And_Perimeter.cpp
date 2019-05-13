#include <iostream>
#include <string>

using namespace std;
int main() {
  double r;
  cin >> r;

  double area = 3.14159265359 * r * r;
  double perimeter = 2 * 3.14159265359 * r;

  cout << "Area = " << area << endl;
  cout << "Perimeter = " << perimeter << endl;

  return 0;
}