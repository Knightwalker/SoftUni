#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  int hoursExam, minutesExam, hoursArrival, minutesArrival, getHours, getMinutes;
  cin >> hoursExam >> minutesExam >> hoursArrival >> minutesArrival;

  int examTime = (hoursExam * 60) + minutesExam;
  int arrivalTime = (hoursArrival * 60) + minutesArrival;
  int diffTime = arrivalTime - examTime;
  int secondDiff = examTime - arrivalTime;

  if (diffTime <= 59 && diffTime > 0) {
    cout << "Late" << endl;
    cout << diffTime << " minutes after the start" << endl;
  } else if (diffTime >= 60) {
    int hour = diffTime / 60;
    int minutes = diffTime % 60;
    cout << "Late" << endl;

    cout << hour;
    cout << ":";
    
    if (minutes < 10) {
      cout << "0" << minutes;
    } else {
      cout << minutes;
    }

    cout << " hours after the start" << endl;

  } else if (secondDiff == 0) {
    cout << "On time" << endl;
  } else if (secondDiff <= 30 && secondDiff > 0) {
    cout << "On time" << endl;
    cout << secondDiff << " minutes before the start" << endl;
  } else if (secondDiff > 30 && secondDiff < 60) {
    cout << "Early" << endl;
    cout << secondDiff << " minutes before the start" << endl;              
  } else if (secondDiff >= 60) {
    int hour = secondDiff / 60;
    int minutes = secondDiff % 60;
    cout << "Early" << endl;
    
    cout << hour;
    cout << ":";
    
    if (minutes < 10) {
      cout << "0" << minutes;
    } else {
      cout << minutes;
    }

    cout << " hours before the start" << endl;

  }
  
  return 0;

}