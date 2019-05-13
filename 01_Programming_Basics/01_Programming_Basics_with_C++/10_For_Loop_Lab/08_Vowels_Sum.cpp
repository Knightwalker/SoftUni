#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
  
  string n = "";
  getline(cin, n);

  int sum = 0;

  for (int i = 0; i < n.length(); i++) {

    if (n[i] == 'a') {
      sum += 1;
    } else if (n[i] == 'e') {
      sum += 2;
    } else if (n[i] == 'i') {
      sum += 3;   
    } else if (n[i] == 'o') {
      sum += 4;
    } else if (n[i] == 'u') {
      sum += 5;
    }

  }

  cout << sum << endl;
  
  return 0;

}