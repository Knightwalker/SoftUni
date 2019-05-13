#include <iostream>
using namespace std;

int main() {

  double hours, minutes;
  cin >> hours >> minutes; 

  double seconds1 = hours * 3600;
  double seconds2 = minutes * 60;
  int seconds = seconds1 + seconds2 + (15 * 60);
  int newHour = seconds / 3600;
  int newMinutes = (seconds % 3600) / 60;

  if (newHour == 24) {
    cout << "0:";
  } else {
    cout << newHour << ":";
  }

  if (newMinutes < 10) {
    cout << "0";
  }

  cout << newMinutes << endl;
  
  return 0;
}