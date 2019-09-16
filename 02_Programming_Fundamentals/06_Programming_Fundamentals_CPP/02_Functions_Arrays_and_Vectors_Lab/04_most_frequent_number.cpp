#include <iostream>
#include <vector>
using namespace std;

vector<int> readIntArray();
vector<int> initOccurancesVector();

int main() {
	vector<int> numbersVect = readIntArray();
	vector<int> occurancesVect = initOccurancesVector();

	int maxOccurance = 0;

  int numbersVectLenght = numbersVect.size();
	for (int i = 0; i < numbersVectLenght; i++) {
		int num = numbersVect[i];

		occurancesVect[num]++;

		if (occurancesVect[num] > maxOccurance) {
			maxOccurance = occurancesVect[num];
		}
	}

  int occurancesVectLenght = occurancesVect.size();
	for (int i = 0; i < occurancesVectLenght; i++) {
		int occurance = occurancesVect[i];

		if (occurance == maxOccurance) {
			cout << i << " ";
		}
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

vector<int> initOccurancesVector() {
	vector<int> occurancesVect;
	for (int i = 0; i <= 9; i++) {
		occurancesVect.push_back(0);
	}
	return occurancesVect;
}