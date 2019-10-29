#include <iostream>
#include <vector>
using namespace std;

vector<int> readIntArray();

int main() {
	vector<int> numbersVect = readIntArray();
  vector<int> cartesianProductVect; 

  int numbersVectSize = numbersVect.size();
  for (int i = 0; i < numbersVectSize; i++) {
    for (int j = 0; j < numbersVectSize; j++) {
      cartesianProductVect.push_back(numbersVect[i] * numbersVect[j]);
    } 
  }

  int cartesianProductVectSize = cartesianProductVect.size();
  for (int i = 0; i < cartesianProductVectSize; i++) {
    cout << cartesianProductVect[i] << " ";
  }

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