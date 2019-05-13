#include <iostream>
#include <math.h>
using namespace std;

int main() {
  string yearType;
  double feasts, holidays;

  cin >> yearType >> feasts >> holidays;

  double weekends = 48;
  weekends -= holidays;

  double sundaySofiaPlays = weekends * 0.75; 
  double holidayPlays = holidays;
  double feastPlays = feasts * 0.66666666666;

  double totalPlays = sundaySofiaPlays + holidayPlays + feastPlays;

  if (yearType == "leap") {
    totalPlays += totalPlays * 0.15;
  }

  if (holidays == 0) {
    cout << floor(totalPlays) + 1 << endl;
  } else {
    cout << floor(totalPlays) << endl;
  }

  return 0;
}