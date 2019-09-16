#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

vector<int> readIntArray();

int main() {
	vector<int> numbersVect = readIntArray();
  int numbersVectSize = numbersVect.size();

  if (numbersVectSize <= 1) {
		cout << 0;
		return 0;
	}
 
  int delta = INT32_MAX;

  for (int i = 0; i < numbersVectSize; i++) {
    for (int j = 0; j < numbersVectSize; j++) {

      if (i == j) { continue; }

      int currentDelta = abs(numbersVect[i] - numbersVect[j]);
      if (currentDelta < delta) {
        delta = currentDelta;
      }

    }
  }

  cout << delta;
  return 0;

}

vector<int> readIntArray() {
	vector<int> numbersVect;
	int length;
	cin >> length;
	for (int i = 0; i < length; i++) {
		int num;
		cin >> num;
		numbersVect.push_back(num);
	}

	return numbersVect;
}