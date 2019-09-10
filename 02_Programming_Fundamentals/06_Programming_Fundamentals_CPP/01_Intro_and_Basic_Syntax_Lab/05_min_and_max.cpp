#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int n;
  int minN = 999999;
  int maxN = -999999;
  cin >> n;

  for (int i = 1; i <= n; i++) {
    int currentN = 0;
    cin >> currentN;

    minN = min(minN, currentN);
    maxN = max(maxN, currentN);
  }

  cout << minN << " " << maxN;

}