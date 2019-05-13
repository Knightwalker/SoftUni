#include <iostream>
#include <string>
#include <math.h>
using namespace std;

int main() {
  string sushi = "";
  string restaurant = "";
  string task = "";
  double portions = 0.0;
  double price = 0.0;

  getline(cin, sushi);
  getline(cin, restaurant);
  cin >> portions;
  cin.ignore();
  getline(cin, task);

  if (restaurant == "Sushi Zone") {
    if (sushi == "sashimi") {
      price = 4.99;
    } else if (sushi == "maki") {
      price = 5.29;
    } else if (sushi == "uramaki") {
      price = 5.99;
    } else if (sushi == "temaki") {
      price = 4.29;
    }
  } else if (restaurant == "Sushi Time") {
    if (sushi == "sashimi") {
      price = 5.49;
    } else if (sushi == "maki") {
      price = 4.69;
    } else if (sushi == "uramaki") {
      price = 4.49;
    } else if (sushi == "temaki") {
      price = 5.19;
    }
  } else if (restaurant == "Sushi Bar") {
    if (sushi == "sashimi") {
      price = 5.25;
    } else if (sushi == "maki") {
      price = 5.55;
    } else if (sushi == "uramaki") {
      price = 6.25;
    } else if (sushi == "temaki") {
      price = 4.75;
    }
  } else if (restaurant == "Asian Pub") {
    if (sushi == "sashimi") {
      price = 4.50;
    } else if (sushi == "maki") {
      price = 4.80;
    } else if (sushi == "uramaki") {
      price = 5.50;
    } else if (sushi == "temaki") {
      price = 5.50;
    }
  }

  double totalPrice = price * portions;

  if (task == "Y") {
    totalPrice += totalPrice * 0.20;
  }

  if (totalPrice > 0) {
    cout << "Total price: " << ceil(totalPrice) << " lv." << endl;
  } else {
    cout << restaurant << " is invalid restaurant!";
  }

}