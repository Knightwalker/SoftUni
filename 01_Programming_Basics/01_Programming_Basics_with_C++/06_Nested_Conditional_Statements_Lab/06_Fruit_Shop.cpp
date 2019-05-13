#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  string fruit, dayOfWeek;
  double quantity, price;
  bool validateDay = false;
  bool validateFruit = false;

  cin >> fruit >> dayOfWeek >> quantity;

  if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
    validateDay = true;
    if (fruit == "banana") {
      price = 2.50;
      validateFruit = true;
    } else if (fruit == "apple") {
      price = 1.20;
      validateFruit = true;
    } else if (fruit == "orange") {
      price = 0.85;
      validateFruit = true;
    } else if (fruit == "grapefruit") {
      price = 1.45;
      validateFruit = true;
    } else if (fruit == "kiwi") {
      price = 2.70;
      validateFruit = true;
    } else if (fruit == "pineapple") {
      price = 5.50;
      validateFruit = true;
    } else if (fruit == "grapes") {
      price = 3.85;
      validateFruit = true;
    }
  } else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
    validateDay = true;
    if (fruit == "banana") {
      price = 2.70;
      validateFruit = true;
    } else if (fruit == "apple") {
      price = 1.25;
      validateFruit = true;
    } else if (fruit == "orange") {
      price = 0.90;
      validateFruit = true;
    } else if (fruit == "grapefruit") {
      price = 1.60;
      validateFruit = true;
    } else if (fruit == "kiwi") {
      price = 3.00;
      validateFruit = true;
    } else if (fruit == "pineapple") {
      price = 5.60;
      validateFruit = true;
    } else if (fruit == "grapes") {
      price = 4.20;
      validateFruit = true;
    }
  }

  if (validateFruit == false || validateDay == false) {
    cout << fixed << "error" << endl;
  } else {
    cout << fixed << setprecision(2) << quantity * price << endl;
  }

  return 0;

}