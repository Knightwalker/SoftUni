#include <iostream>
#include <string>
using namespace std;

int main() {
  
  int n = 0;
  cin >> n;

  int minValue = 99999;

  for (int i = 0; i < n; i++) {
    int numbers = 0;
    cin >> numbers;
    
    if (numbers < minValue) {
      minValue = numbers;
    }

  }

  cout << minValue << endl;

  return 0;
}