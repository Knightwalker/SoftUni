#include <iostream>
#include <string>
using namespace std;

int main() {
  
  int n = 0;
  cin >> n;

  int sum = 0;

  for (int i = 0; i < n; i++) {
    int numbers = 0;
    cin >> numbers;
    sum += numbers;

  }

  cout << sum << endl;

  return 0;

}