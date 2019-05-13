#include <iostream>
using namespace std;

int main() {
  double n1;
  double n2;
  double res;
  cin >> n1 >> n2;

  if (n1 >= n2) { 
    res = n1; 
  }
  else { 
    res = n2; 
  }

  cout << res << endl;
  return 0;
}