#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double moneyFood = 0.0;
  double moneySouvenirs = 0.0;
  double moneyHotel = 0.0;
  cin >> moneyFood >> moneySouvenirs >> moneyHotel;
  double res = 0.0;

  double fuelMoney = 54.39;
  double moneyForJunk = 3 * moneyFood + 3 * moneySouvenirs;

  double hotelDayOne = moneyHotel * 0.9;
  double hotelDayTwo = moneyHotel * 0.85;
  double hotelDayThree = moneyHotel * 0.8;

  res = fuelMoney + moneyForJunk + hotelDayOne + hotelDayTwo + hotelDayThree;

  cout << "Money needed: " << fixed << setprecision(2) << res << endl;

}