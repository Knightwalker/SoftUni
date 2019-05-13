#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  
  int n = 0;
  cin >> n;

  int even = 0;
  int odd = 0;

  for (int i = 0; i < n; i++) {
    int numbers = 0;
    cin >> numbers;
    
    if (i % 2 == 0) {
      even += numbers;
    } else {
      odd += numbers;
    }
  }

  if (even == odd) {
    cout << "Yes, sum = " << even << endl;
  } else {
    cout << "No, diff = " << abs(even - odd) << endl;
  }
	
  return 0;

}