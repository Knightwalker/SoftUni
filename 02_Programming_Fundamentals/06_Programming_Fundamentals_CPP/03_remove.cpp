#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> readIntVector();

int main() {
  vector<int> numbersVect = readIntVector();
  vector<int> resultVect;
  int n = 0; cin >> n;

  int numbersVectSize = numbersVect.size();
  for (int i = 0; i < numbersVectSize; i++) {
    if (numbersVect[i] != n) {
      resultVect.push_back(numbersVect[i]);
    }
  }
 
  int resultVectSize = resultVect.size();
  for (int i = 0; i < resultVectSize; i++) {
    cout << resultVect[i] << " ";
  }

}

vector<int> readIntVector() {
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