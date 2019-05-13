#include <iostream>
#include <iomanip> 

using namespace std;
int main() {
  double tables;
  double lenght;
  double width;

  cin >> tables >> lenght >> width;

  double res1 = tables * (lenght + 2 * 0.30) * (width + 2 * 0.30);
  double res2 = tables * (lenght / 2) * (lenght / 2);

  double usd = res1 * 7 + res2 * 9;
  double bgn = usd * 1.85;

  cout << fixed << setprecision(2) << usd << " USD" << endl;
  cout << fixed << setprecision(2) << bgn << " BGN" << endl;

  return 0;
}
