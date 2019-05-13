#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  int n1, n2;
  string operation, checkOddOrEven;
  cin >> n1 >> n2 >> operation;

  int bigN, minN;

  if (n1 >= n2) {
    bigN = n1;
    minN = n2;
  } else {
    bigN = n2;
    minN = n1;
  }

  if (operation == "+") {
    if ((n1 + n2) % 2 == 0)  {
      checkOddOrEven = "even";
    } else {
      checkOddOrEven = "odd";
    }
    cout << n1 << " + " << n2 << " = " << n1 + n2 << " - " << checkOddOrEven << endl;

  } else if (operation == "-") {

    if ((n1 - n2) % 2 == 0)  {
      checkOddOrEven = "even";
    } else {
      checkOddOrEven = "odd";
    }
    cout << n1 << " - " << n2 << " = " << n1 - n2 << " - " << checkOddOrEven << endl;

  } else if (operation == "*") {

    if ((n1 * n2) % 2 == 0)  {
      checkOddOrEven = "even";
    } else {
      checkOddOrEven = "odd";
    }
    cout << n1 << " * " << n2 << " = " << n1 * n2 << " - " << checkOddOrEven << endl;

  } else if (operation == "/") {

    if (n2 == 0) {
      cout << "Cannot divide " << n1 << " by zero" << endl;
    } else {
      cout << n1 << " / " << n2 << " = " << fixed << setprecision(2) << (double)n1 / (double)n2 << endl;
    }

  } else if (operation == "%") {

    if (minN == 0) {
      cout << "Cannot divide " << n1 << " by zero" << endl;
    } else {       
      cout << n1 << " % " << n2 << " = " << n1 % n2 << endl;
    }

  }

  return 0;

}