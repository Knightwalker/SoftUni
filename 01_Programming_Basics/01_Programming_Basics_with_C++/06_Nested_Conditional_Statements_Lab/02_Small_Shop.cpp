#include <iostream>
using namespace std;

int main() {
  string product = "";
  string town = "";
  double quantity = 0.0;
  double price = 0.0;

  cin >> product >> town >> quantity;

  if (town == "Sofia") {
    if (product == "coffee") {
      price = 0.50;
    } else if (product == "water") {
      price = 0.80;
    } else if (product == "beer") {
      price = 1.20;      
    } else if (product == "sweets") {
      price = 1.45;
    } else if (product == "peanuts") {
      price = 1.60;
    }
  } else if (town == "Plovdiv") {
    if (product == "coffee") {
      price = 0.40;
    } else if (product == "water") {
      price = 0.70;
    } else if (product == "beer") {
      price = 1.15;      
    } else if (product == "sweets") {
      price = 1.30;
    } else if (product == "peanuts") {
      price = 1.50;
    }
  } else if (town == "Varna") {
    if (product == "coffee") {
      price = 0.45;
    } else if (product == "water") {
      price = 0.70;
    } else if (product == "beer") {
      price = 1.10;      
    } else if (product == "sweets") {
      price = 1.35;
    } else if (product == "peanuts") {
      price = 1.55;
    }
  }

  cout << price * quantity << endl;

  return 0;

}