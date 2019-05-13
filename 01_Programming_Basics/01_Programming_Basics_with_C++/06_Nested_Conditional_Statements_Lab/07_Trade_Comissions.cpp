#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string town;
  double quantitySales, comission;

  cin >> town >> quantitySales;

  bool validateTown = false;
  bool validateQuantity = false;

  if (town == "Sofia" || town == "Varna" || town == "Plovdiv") {
    validateTown = true;
  }

  if (quantitySales >= 0 && quantitySales <= 500) {
    validateQuantity = true;
  } else if (quantitySales > 500 && quantitySales <= 1000) {
    validateQuantity = true;
  } else if (quantitySales > 1000 && quantitySales <= 10000) {
    validateQuantity = true;
  } else if (quantitySales > 10000) {
    validateQuantity = true;
  }

  if (town == "Sofia") {
    if (quantitySales >= 0 && quantitySales <= 500) {
      comission = 0.05;
    } else if (quantitySales > 500 && quantitySales <= 1000) {
      comission = 0.07;
    } else if (quantitySales > 1000 && quantitySales <= 10000) {
      comission = 0.08;
    } else if (quantitySales > 10000) {
      comission = 0.12;
    }
  } else if (town == "Varna") {
    if (quantitySales >= 0 && quantitySales <= 500) {
      comission = 0.045;
    } else if (quantitySales > 500 && quantitySales <= 1000) {
      comission = 0.075;
    } else if (quantitySales > 1000 && quantitySales <= 10000) {
      comission = 0.1;
    } else if (quantitySales > 10000) {
      comission = 0.13;
    }
  } else if (town == "Plovdiv") {
    if (quantitySales >= 0 && quantitySales <= 500) {
      comission = 0.055;
    } else if (quantitySales > 500 && quantitySales <= 1000) {
      comission = 0.08;
    } else if (quantitySales > 1000 && quantitySales <= 10000) {
      comission = 0.12;
    } else if (quantitySales > 10000) {
      comission = 0.145;
    }
  }

  if (validateTown == true && validateQuantity == true) {
    cout << fixed << setprecision(2) << quantitySales * comission << endl;
  } else {
    cout << "error" << endl;
  }

  return 0;

}