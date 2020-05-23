#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
void findLongestSequenceOfEqualElements(vector<int>& inputVect, vector<int>& resultVect);

int main()
{
	vector<int> inputVect;
	readIntVector(inputVect);

	vector<int> resultVect;
	findLongestSequenceOfEqualElements(inputVect, resultVect);

	for (size_t i = 0; i < resultVect.size(); i++)
	{
		cout << resultVect[i] << " ";
	}

	return 0;
}

void readIntVector(vector<int>& vect) {
	int n = 0; cin >> n;
	int el = 0;
	for (int i = 0; i < n; i++) {
		cin >> el;
		vect.push_back(el);
	}
}

void findLongestSequenceOfEqualElements(vector<int>& inputVect, vector<int>& resultVect) {

	int maxLengthStartIndex = -1;
	int maxLength = -1;

	for (int i = 0; i < inputVect.size() - 1; i++) {
		int currentLength = 1;

		for (int j = i + 1; j < inputVect.size(); j++) {
			if (inputVect[i] == inputVect[j]) {
				currentLength++;
			}
			else {
				break;
			}
		}

		if (currentLength >= maxLength) {
			maxLengthStartIndex = i;
			maxLength = currentLength;
		}

	}

	// edge case - check last index
	int currentLength = 1;
	if (currentLength >= maxLength) {
		maxLengthStartIndex = inputVect.size() - 1;
		maxLength = currentLength;
	}

	for (int i = maxLengthStartIndex; i < maxLengthStartIndex + maxLength; i++) {
		resultVect.push_back(inputVect[i]);
	}

}