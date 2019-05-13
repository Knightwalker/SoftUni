#include <iostream>
#include <iomanip>

using namespace std;
int main() {
  double lenght;
  double width;
  double height;
  double percent;

  cin >> lenght >> width >> height >> percent;

  double aquarium = lenght * width * height;
  double liters = aquarium * 0.001;
  percent = percent * 0.01;
  
  double res = liters * (1 - percent);
  cout << fixed << setprecision(3) << res << endl;

  return 0;
}