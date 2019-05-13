#include <iostream>
#include <string>
using namespace std;

int main() {
  
  int n, num;
  cin >> n;
  num = 1;

  while (true) {
    cout << num << endl;
    num = num * 2 + 1;    
    
    if (num > n) { break; } 
  }  

  return 0;

}