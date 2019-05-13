#include <iostream>
#include <string>
#include <math.h> 
#include <stdlib.h> 
using namespace std;

int main() {
  int guests = 0.0;
  int budget = 0.0; 
  cin >> guests >> budget;

  int couvert = guests * 20;

  if (couvert <= budget) {
    int moneyLeft = budget - couvert;
    double fireworks = round(moneyLeft * 0.4);
    double charity = moneyLeft - fireworks;

    cout << "Yes! " << fireworks << " lv are for fireworks and " << charity << " lv are for donation." << endl;

  } else {
    cout << "They won't have enough money to pay the covert. They will need " << abs(couvert - budget) << " lv more." << endl;
  }

  return 0;
}