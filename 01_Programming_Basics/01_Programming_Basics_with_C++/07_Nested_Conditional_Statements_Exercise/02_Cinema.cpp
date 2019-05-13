#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string projection;
  double r, c, people, price;

  cin >> projection >> r >> c;
  people = r * c;

  if (projection == "Premiere") {
    price = 12.00;
  } else if (projection == "Normal") {
    price = 7.50;
  } else if (projection == "Discount") {
    price = 5.00;
  }

  double res = price * people;

  cout << fixed << setprecision(2) << res << endl;

  return 0;

}