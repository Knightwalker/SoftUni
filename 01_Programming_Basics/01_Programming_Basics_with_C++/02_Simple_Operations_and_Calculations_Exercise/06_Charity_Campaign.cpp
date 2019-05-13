#include <iostream>
#include <iomanip> 

using namespace std;
int main() {
  double days;
  double confectioner;
  double cake;
  double gufCake;
  double panCake;

  cin >> days >> confectioner >> cake >> gufCake >> panCake;

  cake = cake * 45;
  gufCake = gufCake * 5.80;
  panCake = panCake * 3.20;

  double sumDay = (cake + gufCake + panCake) * confectioner;
  double sumCampain = sumDay * days;
  double sumAfter = sumCampain - (sumCampain * 0.125);

  cout << fixed << setprecision(2) << sumAfter << endl;

  return 0;
}
