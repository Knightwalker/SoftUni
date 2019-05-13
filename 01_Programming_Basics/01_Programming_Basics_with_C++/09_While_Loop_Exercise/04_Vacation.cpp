#include <iostream>
#include <string>
using namespace std;

int main() {
  double travelMoney = 0;
  double availabeMoney = 0;
  int dayCounter = 0;
  int spendCounter = 0;
  cin >> travelMoney >> availabeMoney;

  while (true) {
    string action = "";
    cin.ignore();
    getline(cin, action);

    double dayMoney = 0;
    cin >> dayMoney;
    dayCounter++;

    if (action == "spend") {
        spendCounter++;
        availabeMoney -= dayMoney;
        if (dayMoney > availabeMoney) {
            availabeMoney = 0;
        }

    } else if (action == "save") {
        spendCounter = 0;
        availabeMoney += dayMoney;
    }
    if (availabeMoney >= travelMoney)
    {
      cout << "You saved the money for " << dayCounter << " days." << endl;
      break;
    }
    if (spendCounter >= 5) {
      cout << "You can't save the money." << endl;
      cout << dayCounter << endl;
      break;
    }
  }

  return 0;

}