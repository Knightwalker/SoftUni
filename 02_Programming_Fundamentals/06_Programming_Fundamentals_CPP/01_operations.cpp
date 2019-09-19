#include <iostream>
#include <string>
using namespace std;

int main() {
  int n1 = 0;
  int n2 = 0;
  cin >> n1 >> n2;

  while (true) {
    string opr = "";
    cin >> opr;

    if (opr == "+" || opr == "-" || opr == "*" || opr == "/") {
      if (opr == "+") { cout << n1 + n2 << endl; }
      else if (opr == "-") { cout << n1 - n2 << endl; }
      else if (opr == "*") { cout << n1 * n2 << endl; }
      else if (opr == "/") { cout << n1 / n2 << endl; }
      break;
    } else {
      cout << "try again" << endl;
    }
  }

}