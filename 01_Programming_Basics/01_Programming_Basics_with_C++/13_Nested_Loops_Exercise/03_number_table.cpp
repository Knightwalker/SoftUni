#include <iostream>
using namespace std;

int main() {
    int n = 0;
    cin >> n;

    for(int i = 0; i < n; i++) 
    {
      for(int i2 = 0; i2 < n; i2++) {
          int num = i + i2 + 1;

        if (num > n) {
          num = 2 * n - num;
          cout << num << " ";
        } else {
          cout << num << " ";
        }

      }
      cout << endl;
    }

    return 0;
}