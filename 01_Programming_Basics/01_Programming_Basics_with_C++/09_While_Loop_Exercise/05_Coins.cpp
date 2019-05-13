#include <iostream>
#include <string>
#include <math.h>  
#include <float.h>
#include <iomanip>
using namespace std;

bool almostEqual(float a, float b)
{
    return fabs(a - b) <= FLT_EPSILON;
}

int main() {
  double coins = 0;
  int counter = 0;
  cin >> coins;

  while (true) {
    if (coins <= 0) { break; }

    if ((coins > 2) || (almostEqual(coins, 2))) {
      coins -= 2;
    } else if ((coins > 1) || (almostEqual(coins, 1))) {
      coins -= 1;
    } else if ((coins > 0.5) || (almostEqual(coins, 0.5))) {
      coins -= 0.5;      
    } else if ((coins > 0.2) || (almostEqual(coins, 0.2))) {
      coins -= 0.2;
    } else if ((coins > 0.1) || (almostEqual(coins, 0.1))) {
      coins -= 0.1;
    } else if ((coins > 0.05) || (almostEqual(coins, 0.05))) {
      coins -= 0.05;
    } else if ((coins > 0.02) || (almostEqual(coins, 0.02))) {
      coins -= 0.02;
    } else if ((coins < 0.02) || (almostEqual(coins, 0.01))) {
      coins -= 0.01;
    }

    if (coins < 0.01) { coins = 0; }

    counter++;

  }

  cout << counter << endl;

  return 0;

}