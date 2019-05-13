#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

int main() {
  double recordInSec, distanceInMeters, timeInSecPerMeter;
  cin >> recordInSec >> distanceInMeters >> timeInSecPerMeter;

  double distance = distanceInMeters * timeInSecPerMeter;
  double distanceHalted = (floor(distanceInMeters / 15) * 12.5);  
  double totalTime = distance + distanceHalted;

  if (totalTime < recordInSec) {
    cout << "Yes, he succeeded! The new world record is " << fixed << setprecision(2) << totalTime << " seconds." << endl;
  } else {
    cout << "No, he failed! He was " << fixed << setprecision(2) << abs(recordInSec - totalTime) << " seconds slower." << endl;
  }

}