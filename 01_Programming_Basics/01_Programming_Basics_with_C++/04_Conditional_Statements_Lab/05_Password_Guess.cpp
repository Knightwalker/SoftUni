#include <iostream>
using namespace std;

int main() {
  string input;
  string msg;
  cin >> input;

if (input == "s3cr3t!P@ssw0rd") {
    msg = "Welcome";
  }
else {
    msg = "Wrong password!";
  }
  
  cout << msg << endl;
  return 0;
}