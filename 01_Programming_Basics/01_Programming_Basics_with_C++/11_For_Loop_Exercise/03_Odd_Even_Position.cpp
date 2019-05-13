#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  int n = 0;

  double evenSum = 0;
  double evenMax = -999999;
  double evenMin = 999999;

  double oddSum = 0;
  double oddMax = -999999;
  double oddMin = 999999;

  cin >> n;

  for (int i = 1; i <= n; i++) {
    double number = 0;
    cin >> number;

    if (i % 2 == 0) {
      evenSum += number;

      if (number > evenMax) {
        evenMax = number;
      }
      if (number < evenMin) {
        evenMin = number;
      }    
    } else {
      oddSum += number;

      if (number > oddMax) {
        oddMax = number;
      }
      if (number < oddMin) {
        oddMin = number;
      }  
    }
  }

  cout << "OddSum=" << oddSum << "," << endl;

  if (oddMin != 999999) {
    cout << "OddMin=" << oddMin << "," << endl;
  } else {
    cout << "OddMin=No," << endl;
  }

  if (oddMax != -999999) {
    cout << "OddMax=" << oddMax << "," << endl;
  } else {
    cout << "OddMax=No," << endl;
  }

  cout << "EvenSum=" << evenSum << "," << endl;

  if (evenMin != 999999) {
    cout << "EvenMin=" << evenMin << "," << endl;
  } else {
    cout << "EvenMin=No," << endl;
  }

  if (evenMax != -999999) {
    cout << "EvenMax=" << evenMax << endl;
  } else {
    cout << "EvenMax=No" << endl;
  }

  return 0;
  
}