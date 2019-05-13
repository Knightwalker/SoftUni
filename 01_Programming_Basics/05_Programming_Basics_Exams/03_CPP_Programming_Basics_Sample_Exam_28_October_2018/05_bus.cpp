#include <iostream>
#include <string>
using namespace std;

int main() {
  int passengers = 0;
  int stops = 0;
  cin >> passengers >> stops;

  int passengersOut = 0;
  int passengersIn = 0;

  for (int i = 1; i <= stops; i++) {
    cin >> passengersOut >> passengersIn;

    passengers -= passengersOut;
    passengers += passengersIn;

    if (i % 2 == 0) {
      passengers -= 2;
    } else {
      passengers += 2;
    }
  }

  cout << "The final number of passengers is : " << passengers << endl;

}