#include <iostream>
#include <iomanip> 

using namespace std;
int main() {
  double priceWhisky;
  double beer;
  double wine;
  double rakia;
  double whisky;
  cin >> priceWhisky >> beer >> wine >> rakia >> whisky;

  double priceRakia = priceWhisky / 2;
  double priceWine = priceRakia - (priceRakia * 0.4);
  double priceBeer = priceRakia - (priceRakia * 0.8);

  double sumRakia = rakia * priceRakia;
  double sumWine = wine * priceWine;
  double sumBeer = beer * priceBeer;
  double sumWhisky = whisky * priceWhisky;

  double res = sumRakia + sumWine + sumBeer + sumWhisky;
  cout << fixed << setprecision(2) << res << endl;

  return 0;
}
