#include <iostream>
#include <iomanip> 

using namespace std;
int main() {
  double amount;
  double res;
  string input;
  string output;

  cin >> amount >> input >> output;

  if (input == "BGN") {
    if (output == "USD") { res = amount / 1.79549; }
    else if (output == "EUR") { res = amount / 1.95583; }
    else if (output == "GBP") { res = amount / 2.53405; }
  } else if (input == "USD") {
    if (output == "BGN") { res = amount * 1.79549; }
    else if (output == "EUR") { res = amount * 1.79549 / 1.95583; }
    else if (output == "GBP") { res = amount * 1.79549/ 2.53405; }
  } else if (input == "EUR") {
    if (output == "BGN") { res = amount * 1.95583; }
    else if (output == "USD") { res = amount * 1.95583 / 1.79549; }
    else if (output == "GBP") { res = amount * 1.95583 / 2.53405; }
  } else if (input == "GBP") {
    if (output == "BGN") { res = amount * 2.53405; }
    else if (output == "USD") { res = amount * 2.53405 / 1.79549; }
    else if (output == "EUR") { res = amount * 2.53405 / 2.53405; }
  } 

  cout << fixed << setprecision(2) << res << " " << output << endl;

  return 0;
}
