#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> readIntVector();

int main() {
  vector<int> numbersVect = readIntVector();

  int indexOf = -1;
  int numberSearched = 0; cin >> numberSearched;

  int numbersVectSize = numbersVect.size();
  for (int i = 0; i < numbersVectSize; i++) {
    if (numbersVect[i] == numberSearched) {
      indexOf = i;
      break;
    }
  }
 
  cout << indexOf << endl;

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