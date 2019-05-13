#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double n;
  string input;
  string output;
  cin >> n >> input >> output;

  if (input == "m") {n = n / 1.0; }
  else if (input == "mm") { n = n / 1000; }
  else if (input == "cm") { n = n / 100; }
  else if (input == "mi") { n = n / 0.000621371192; }
  else if (input == "in") { n = n / 39.3700787; }
  else if (input == "km") { n = n / 0.001; }
  else if (input == "ft") { n = n / 3.2808399; }
  else if (input == "yd") { n = n / 1.0936133; }

  if (output == "m") {n = n * 1.0; }
  else if (output == "mm") { n = n * 1000; }
  else if (output == "cm") { n = n * 100; }
  else if (output == "mi") { n = n * 0.000621371192;}
  else if (output == "in") { n = n * 39.3700787; }
  else if (output == "km") { n = n * 0.001; }
  else if (output == "ft") { n = n * 3.2808399; }
  else if (output == "yd") { n = n * 1.0936133; }

  cout << fixed << setprecision(3) << n << endl;
	
  return 0;
}

