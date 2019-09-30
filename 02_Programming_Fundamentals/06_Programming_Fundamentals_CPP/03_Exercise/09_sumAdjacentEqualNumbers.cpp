#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::vector;

vector<int> consoleReadIntVector();

int main() {
	vector<int> intVect = consoleReadIntVector();

	int intVectSize = intVect.size();
	for (int i = 0; i < intVectSize - 1; i++) {
		if (intVect[i] == intVect[i + 1]) {
			intVect[i] = (intVect[i] + intVect[i + 1]);
			intVect.erase(intVect.begin() + i + 1);
			intVectSize -= 1;
			i = -1;
		}
	}

	intVectSize = intVect.size();
	for (int i = 0; i < intVectSize; ++i) {
		cout << intVect[i] << " ";
	}

	return 0;
}

vector<int> consoleReadIntVector() {
	int size = 0;
	cin >> size;
	vector<int> intVect;

	for (int i = 0; i < size; i++) {
		int n;
		cin >> n;
		intVect.push_back(n);
	}

	return intVect;
}