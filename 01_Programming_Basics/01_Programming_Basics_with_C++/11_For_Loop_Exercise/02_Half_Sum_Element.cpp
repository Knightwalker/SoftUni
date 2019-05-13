#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  int n = 0;
  int sum = 0;
  int maxNum = -999999;

  cin >> n;

  for (int i = 0; i < n; i++) {
    int number = 0;
    cin >> number;

    sum += number;

    if (number > maxNum) {
      maxNum = number;
    }
  }

  sum -= maxNum;

  if (sum == maxNum) {
    cout << "Yes Sum = " << sum << endl;
  } else {
    cout << "No Diff = " << abs(sum - maxNum) << endl;
  }

  return 0;
  
}