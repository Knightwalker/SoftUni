#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double budget;
  string season;

  cin >> budget >> season;

  if (budget <= 100) {
    cout << "Somewhere in Bulgaria" << endl;

    if (season == "summer") {
      cout << "Camp - " << fixed << setprecision(2) << budget * 0.30 << endl;
    } else if (season == "winter") {
      cout << "Hotel - " << fixed << setprecision(2) << budget * 0.70 << endl;
    }

  } else if (budget > 100 && budget <= 1000) {
    cout << "Somewhere in Balkans" << endl;

    if (season == "summer") {
      cout << "Camp - " << fixed << setprecision(2) << budget * 0.40 << endl;
    } else if (season == "winter") {
      cout << "Hotel - " << fixed << setprecision(2) << budget * 0.80 << endl;
    }

  } else if (budget > 1000) {
    cout << "Somewhere in Europe" << endl;

    if (season == "summer") {
      cout << "Hotel - " << fixed << setprecision(2) << budget * 0.90 << endl;
    } else if (season == "winter") {
      cout << "Hotel - " << fixed << setprecision(2) << budget * 0.90 << endl;
    }

  }

  return 0;

}