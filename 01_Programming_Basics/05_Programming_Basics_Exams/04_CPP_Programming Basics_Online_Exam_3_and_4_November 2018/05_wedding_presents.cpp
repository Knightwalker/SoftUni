#include <iostream>
#include <string>
//#include <math.h> 
//#include <stdlib.h> 
#include <iomanip>
using namespace std;

int main() {

  string guestsInput = "";
  string giftsInput = "";
  getline(cin, guestsInput);
  getline(cin, giftsInput);
  double guests = stod(guestsInput);
  double gifts = stod(giftsInput);

  double countA = 0;
  double countB = 0;
  double countV = 0;
  double countG = 0;

  string giftType = "";

  for (int i = 1; i <= gifts; i++) {
    getline(cin, giftType);

    if (giftType == "A") {
      countA++;
    } else if (giftType == "B") {
      countB++;
    } else if (giftType == "V") {
      countV++;
    } else if (giftType == "G") {
      countG++;
    }

    //cout << "A:" << countA << " B:" << countB << " C:" << countV << " D:" << countG << endl;

  }    
  
  cout << fixed << setprecision(2) << (countA / gifts) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (countB / gifts) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (countV / gifts) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (countG / gifts) * 100 << "%" << endl;
  cout << fixed << setprecision(2) << (gifts / guests) * 100 << "%" << endl;

  return 0;
}