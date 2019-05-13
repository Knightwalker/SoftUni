#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  int people;
  double startMoney, shipRent;
  string season;

  cin >> startMoney >> season >> people;

  if (season == "Spring") {
    shipRent = 3000;
  } else if (season == "Summer") {
    shipRent = 4200;
  } else if (season == "Autumn") {
    shipRent = 4200;
  } else if (season == "Winter") {
    shipRent = 2600;
  }

  if (people >= 0 && people <= 6) {
    shipRent -= shipRent * 0.10;
  } else if (people > 7 && people <= 11) {
    shipRent -= shipRent * 0.15;
  } else {
    shipRent -= shipRent * 0.25;
  }

  if (people % 2 == 0) {
    if (season != "Autumn") {
      shipRent -= shipRent * 0.05;
    }
  }

  if (startMoney >= shipRent) {
    double leftMoney = startMoney - shipRent;
    cout << "Yes! You have " << fixed << setprecision(2) << leftMoney << " leva left." << endl;
  } else if (startMoney < shipRent) {
    double leftMoney = shipRent - startMoney;
    cout << "Not enough money! You need " << fixed << setprecision(2) << leftMoney << " leva.";
  }
  
  return 0;

}