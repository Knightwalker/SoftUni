#include <iostream>
#include <string>
//#include <math.h> 
//#include <stdlib.h> 
#include <iomanip>
using namespace std;

int main() {

  string contractLen = "";
  string contractType = "";
  string desert = "";
  int months = 0;

  getline(cin, contractLen);
  getline(cin, contractType);
  getline(cin, desert);
  cin >> months;
  cin.ignore();

  double tax = 0.0;
  
  if (contractLen == "one") {
    if (contractType == "Small") {
      tax = 9.98;
    } else if (contractType == "Middle") {
      tax = 18.99;
    } else if (contractType == "Large") {
      tax = 25.98;
    } else if (contractType == "ExtraLarge") {
      tax = 35.99;
    }
  } else if (contractLen == "two") {
    if (contractType == "Small") {
      tax = 8.58;
    } else if (contractType == "Middle") {
      tax = 17.09;
    } else if (contractType == "Large") {
      tax = 23.59;
    } else if (contractType == "ExtraLarge") {
      tax = 31.79;
    }
  }

  if (desert == "yes") {
    if (tax > 0 && tax <= 10) {
      tax += 5.50;
    } else if (tax > 10 && tax <= 30) {
      tax += 4.35;
    } else if (tax > 30) {
      tax += 3.85;
    }
  }

  if (contractLen == "two") {
    tax -= tax * 0.0375;
  }

  cout << fixed << setprecision(2) << tax * months << " lv." << endl;

  return 0;
}