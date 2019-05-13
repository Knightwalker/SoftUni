#include <iostream>
#include <cmath>
#include <iomanip>
#include <math.h>
using namespace std;

int main() {
  double firstTime, secondTime, thirdTime, fishingTime;
  cin >> firstTime >> secondTime >> thirdTime >> fishingTime;
  
  double cleaningTime = 1 / (1 / firstTime + 1 / secondTime + 1 / thirdTime);
  cleaningTime += cleaningTime * 0.15;
  double diffTime = abs(fishingTime - cleaningTime);

  cout << fixed << setprecision(2) << "Cleaning time: " << cleaningTime << endl;

  if (cleaningTime <= fishingTime) {
    cout << "Yes, there is a surprise - time left -> " << (int)floor(diffTime) << " hours." << endl;
  } else {
    cout << "No, there isn't a surprise - shortage of time -> " << (int)ceil(diffTime) << " hours." << endl; 
  }

  return 0;
}