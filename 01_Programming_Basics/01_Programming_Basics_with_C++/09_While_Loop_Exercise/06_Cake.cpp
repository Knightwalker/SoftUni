#include <iostream>
#include <string>
#include <stdlib.h>
using namespace std;

int main() {
  int width = 0;
  int length = 0;
  cin >> width >> length;
  int cakeSize = width * length;
  string input = "";
  cin.ignore();

  while(true) {
    getline(cin, input);
    if (input == "STOP") {
      cout << cakeSize << " pieces are left." << endl;
      break; 
    }
    int number = stoi(input);

    if (cakeSize >= number) {
      cakeSize -= number;
    } else {
      cout << "No more cake left! You need " << abs(cakeSize - number) << " pieces more." << endl;
      break;
    }

  }

  return 0;

}