#include <iostream>
#include <string>
#include <stdlib.h>
#include <iomanip>
using namespace std;

int main() {
  
  int age = 0;
  double priceWashingMachine = 0;
  int priceToy = 0;

  int counterEvenBirhtdays = 0;
  int money = 0;
  int counterToys = 0;

  cin >> age >> priceWashingMachine >> priceToy;

  for (int i = 1; i <= age; i++) {

    if (i % 2 == 0) {
      counterEvenBirhtdays++;
      money += 10 * counterEvenBirhtdays;
      money -= 1;
    } else {
      counterToys++;
    }

  }

  money += counterToys * priceToy;

  if (money >= priceWashingMachine) {
    cout << "Yes! " << fixed << setprecision(2) << money - priceWashingMachine << endl;
  } else {
    cout << "No! " << fixed << setprecision(2) << priceWashingMachine - money << endl;
  }

  return 0;

}