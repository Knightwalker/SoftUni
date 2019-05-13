#include <iostream>
#include <string>
//#include <math.h> 
//#include <stdlib.h> 
#include <iomanip>
using namespace std;

int main() {

  int a, b, n;
  cin >> a >> b >> n;

  int counter = 0;

  for (int i = 1; i <= a; i++) {
    for (int j = 1; j <= b; j++) {

      if (counter == n) {
        return 0;
      }

      cout << "(" << i << " <-> " << j << ")" << " ";
      counter++;
      
    }
  }

  return 0;
}