#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  int n = 0; 
  int pairFirst = 0;
  int pairSecond = 0;
  int maxDiff = -999999;
  bool equal = true;
  cin >> n;

  for (int i = 0; i < n; i++) {
    int numberFirst = 0;
    int numberSecond = 0;
    cin >> numberFirst >> numberSecond;

    if (i % 2 == 0) {
      pairFirst = numberFirst + numberSecond;
    } else {
      pairSecond = numberFirst + numberSecond;
    }

    if (n == 1) {
      equal = true;
    }

    if (i > 0) {
      if (pairFirst == pairSecond) {
        equal = true;
      } else {
        equal = false;

        if (maxDiff < abs(pairFirst - pairSecond)) {
          maxDiff = abs(pairFirst - pairSecond);
        }
      }
    }

  }

  if (equal == true) {
    cout << "Yes, value=" << pairFirst << endl;
  } else {
    cout << "No, maxdiff=" << maxDiff << endl; 
  }

  return 0;

}