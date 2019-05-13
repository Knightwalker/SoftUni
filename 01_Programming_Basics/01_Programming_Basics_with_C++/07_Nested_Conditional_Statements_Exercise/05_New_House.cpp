#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string typeFlowers;
  double countFlowers, priceFlowers, startingMoney;

  cin >> typeFlowers >> countFlowers >> startingMoney;

  if (typeFlowers == "Roses") {
    priceFlowers = 5;

    if (countFlowers > 80) {
      priceFlowers -= priceFlowers * 0.1;
    }

  } else if (typeFlowers == "Dahlias") {
    priceFlowers = 3.80;

    if (countFlowers > 90) {
      priceFlowers -= priceFlowers * 0.15;
    }

  } else if (typeFlowers == "Tulips") {
    priceFlowers = 2.80;
    
    if (countFlowers > 80) {
      priceFlowers -= priceFlowers * 0.15;
    }

  } else if (typeFlowers == "Narcissus") {
    priceFlowers = 3;

    if (countFlowers < 120) {
      priceFlowers += priceFlowers * 0.15;
    }

  } else if (typeFlowers == "Gladiolus") {
    priceFlowers = 2.50;

    if (countFlowers < 80) {
      priceFlowers += priceFlowers * 0.2;
    }

  }
 
  priceFlowers *= countFlowers;

  if (startingMoney >= priceFlowers) {
    double moneyLeft = startingMoney - priceFlowers;
    cout << "Hey, you have a great garden with " << countFlowers << " " << typeFlowers << " and " << fixed << setprecision(2) << moneyLeft << " leva left." << endl;
  } else if (startingMoney < priceFlowers) {
    double moneyNeed = priceFlowers - startingMoney;
    cout << fixed << setprecision(2) << "Not enough money, you need " << moneyNeed << " leva more." << endl; 
  }

  return 0;

}