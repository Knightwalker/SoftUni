#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::vector;

vector<int> splitStringToIntVector(string inputString, char delimiter);

int main() {
	int n = 0; cin >> n;
	int m = 0; cin >> m;
	cin.ignore();

	// LOGIC
	vector<int> resultVect(m, 0);

	for (int i = 0; i < n; i++) {
		string inputString = ""; getline(cin, inputString);
		vector<int> inputVect = splitStringToIntVector(inputString, ' ');

		for (int j = 0; j < m; j++) {
			resultVect[j] += inputVect[j];
		}

	}

	int mod = 0; cin >> mod;

	for (int i = 0; i < m; i++) {
		cout << resultVect[i] % mod << " ";
	}

	return 0;
}

vector<int> splitStringToIntVector(string inputString, char delimiter) {
	vector<int> intVect;

	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			intVect.push_back(stoi(element));
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	intVect.push_back(stoi(element));

	return intVect;
}