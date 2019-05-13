#include <iostream>
#include <iomanip>
#include <cmath> 
using namespace std;

int main() {
  double travelMoney;
  double puzzles;
  double dolls;
  double bears;
  double minions;
  double trucks;
  cin >> travelMoney >> puzzles >> dolls >> bears >> minions >> trucks;

  double totalToys = puzzles + dolls + bears + minions + trucks;

  puzzles *= 2.6;
  dolls *= 3;
  bears *= 4.10;
  minions *= 8.20;
  trucks *= 2;

  double earnedMoney = puzzles + dolls + bears + minions + trucks;

  if (totalToys >= 50) {
    earnedMoney -= earnedMoney * 0.25;
  }
  earnedMoney -= earnedMoney * 0.10;

  if (travelMoney <= earnedMoney) {
    double res = abs(travelMoney - earnedMoney);
    cout << "Yes! " << fixed << setprecision(2) << res << " lv left." << endl;
  } else {
    double res = abs(travelMoney - earnedMoney);
    cout << "Not enough money! " << fixed << setprecision(2) << res << " lv needed.";
  }

  return 0;
}
