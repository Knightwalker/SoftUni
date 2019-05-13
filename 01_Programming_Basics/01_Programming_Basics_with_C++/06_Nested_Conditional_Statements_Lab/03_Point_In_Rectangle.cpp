#include <iostream>
using namespace std;

int main() {
  double x1, y1, x2, y2, x, y;
  string msg;
  cin >> x1 >> y1 >> x2 >> y2 >> x >> y;

  if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
    msg = "Inside";
  } else {
    msg = "Outside";
  }

  cout << msg << endl;

  return 0;
  
}