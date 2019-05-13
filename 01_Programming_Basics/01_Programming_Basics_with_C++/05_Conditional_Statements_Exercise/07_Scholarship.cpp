#include <iostream>
#include <math.h>
using namespace std;

int main() {
  double income, averageGrade, minimumLeasePayments;
  cin >> income >> averageGrade >> minimumLeasePayments;
  double stipend;

  bool socialStipend = false;
  bool excellenceStipend = false; 
  double moneySocial = minimumLeasePayments * 0.35;
  double moneyExcellence = averageGrade * 25;

  if (income <= minimumLeasePayments && averageGrade > 4.5) {
    socialStipend = true;
  } 
  if (averageGrade >= 5.5) {
    excellenceStipend = true;
  }

  if (socialStipend == false && excellenceStipend == false) {
    cout << "You cannot get a scholarship!" << endl;
  }

  if (socialStipend == true && excellenceStipend == true) {
    if (moneyExcellence >= moneySocial || income > minimumLeasePayments) {
      cout << "You get a scholarship for excellent results " << floor(moneyExcellence) << " BGN" << endl;
    } else {
      cout << "You get a Social scholarship " << floor(moneySocial) << " BGN" << endl; 
    }
  } else if (socialStipend == true) {
    cout << "You get a Social scholarship " << floor(moneySocial) << " BGN" << endl;
  } else if (excellenceStipend == true) {
    cout << "You get a scholarship for excellent results " << floor(moneyExcellence) << " BGN" << endl;
  }

  return 0;
}