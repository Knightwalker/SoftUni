#include <iostream>
#include <math.h>

using namespace std;
int main() {
  double L;
  double W;
  double A;

  cin >> L >> W >> A;

  double hallSize = (L * 100) * (W * 100);
  double wardrobe = (A * 100) * (A * 100);
  double bench = hallSize / 10;
  double freeSpace = hallSize - wardrobe - bench;
  double dancers = freeSpace / (40 + 7000);

  cout << floor(dancers) << endl;

  return 0;
}
