#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double n1;
  double n2;
  double n3;
  string msg;
  cin >> n1 >> n2 >> n3;

  if (n1 == n3 && n1 == n2) { 
    msg = "yes";
  } else {
    msg = "no";
  }
  
  cout << msg << endl;
  return 0;
}
