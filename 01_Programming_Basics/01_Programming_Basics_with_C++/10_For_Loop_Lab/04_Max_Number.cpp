#include <iostream>
#include <string>
using namespace std;

int main() {
  
  int n = 0;
  cin >> n;

  int maxValue = -99999;

  for (int i = 0; i < n; i++) {
    int numbers = 0;
    cin >> numbers;
    
    if (numbers > maxValue) {
      maxValue = numbers;
    }

  }

  cout << maxValue << endl;

  return 0;

}