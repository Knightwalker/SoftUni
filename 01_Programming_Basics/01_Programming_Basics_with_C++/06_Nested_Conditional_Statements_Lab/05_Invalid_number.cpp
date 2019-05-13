#include <iostream>
using namespace std;

int main() {
  double number;
  string msg;

  cin >> number;

  if (!(number >= 100 && number <=200 || number == 0)) {
    msg = "invalid";
  }

  cout << msg << endl;

  return 0;
  
}