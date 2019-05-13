#include <iostream>
#include <string> 
#include <math.h> 
#include <iomanip>
#include <stdlib.h> 
using namespace std;

int main() {

    int quota = 0;
    cin >> quota;
    cin.ignore();

    int counter = 0;
    string fishName = "";
    double fishKilograms = 0.0;

    double money = 0;

    while (counter < quota) {
      
      getline(cin, fishName);
      if (fishName == "Stop") { break; }
      counter++;
      cin >> fishKilograms;
      cin.ignore();

      int price = 0;
      for(int i = 0; i < fishName.length(); i++)
      {
        price += (char)fishName[i];
      }
      if(counter % 3 == 0)
      {
        money += price / fishKilograms;
      } else
      {
        money -= price / fishKilograms;
      }
    }

    if(quota == counter)
    {
      cout << "Lyubo fulfilled the quota!" << endl;
    }

    if(money >= 0)
    {
      cout << "Lyubo's profit from " << counter << " fishes is " << fixed << setprecision(2) << money << " leva." << endl;
    }else{
      money = abs(money);
      cout << "Lyubo lost " << fixed << setprecision(2) << money << " leva today." << endl;
    }

    return 0;
}