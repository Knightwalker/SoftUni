#include <iostream>
#include <string>
//#include <math.h> 
//#include <stdlib.h> 
#include <iomanip>
using namespace std;

int main() {

  double budgetStart = 0.0;
  double budget = 0.0;
  cin >> budget;
  cin.ignore();
  budgetStart = budget;

  string stockType = "";
  string stockValueStr = "";
  double stockValue = 0.0;

  int balloons = 0.0;
  int flowers = 0.0;
  int candles = 0.0;
  int ribbon = 0.0;

  while (true) {
    if (budget <= 0) { 
      cout << "All money is spent!" << endl;
      break; 
    }
    getline(cin, stockType);
    if (stockType == "stop") { 
      cout << "Spend money: " << fixed << setprecision(2) << budgetStart - budget << endl;
      cout << "Money left: " << fixed << setprecision(2) << budget << endl;
      break; 
    }
    getline(cin, stockValueStr);
    stockValue = stod(stockValueStr);

    //cout << stockType << endl;
    //cout << stockValue << endl;

    if (stockType == "balloons") {
      budget -= stockValue * 0.1;
      balloons += stockValue;
    } else if (stockType == "flowers") {
      budget -= stockValue * 1.5;
      flowers += stockValue;    
    } else if (stockType == "candles") {
      budget -= stockValue * 0.5;
      candles += stockValue;       
    } else if (stockType == "ribbon") {
      budget -= stockValue * 2;
      ribbon += stockValue;    
    }

    //cout << budget << endl;

  }

  cout << "Purchased decoration is " << balloons << " balloons, " << ribbon << " m ribbon, " << flowers << " flowers and " << candles << " candles." << endl;

  return 0;
}