#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  
  int n = 0;
  cin >> n;

  int leftSum = 0;
  int rightSum = 0;

  for (int i = 0; i < n; i++) {
    int numbers = 0;
    cin >> numbers;
    leftSum += numbers;
  }

  for (int i = n; i < n * 2; i++) {
    int numbers = 0;
    cin >> numbers;
    rightSum += numbers;
  }

  if (leftSum == rightSum) {
    cout << "Yes, sum = " << leftSum << endl;
  } else {
    cout << "No, diff = " << abs(leftSum - rightSum) << endl;
  }
	
  return 0;
}