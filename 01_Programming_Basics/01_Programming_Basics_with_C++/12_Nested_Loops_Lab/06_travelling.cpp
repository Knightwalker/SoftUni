#include <iostream>
#include <string>
using namespace std;

int main() {

  while(true)
  { 
    string destination = "";
    getline(cin, destination);
    if (destination == "End") { break; }  

    string budgetInput = "";
    getline(cin, budgetInput);
    double budget = stod(budgetInput);
    double sum = 0;

    while(true)
    {    
      string moneyInput = "";
      getline(cin, moneyInput);
      double money = stod(moneyInput);
      
      sum += money;
      if(sum >= budget)
      {
        cout << "Going to " << destination << "!" << endl;
        break;
      }
      
    }
  }

  return 0;

}