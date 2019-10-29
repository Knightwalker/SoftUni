#include <iostream>;
#include <string>;
#include <vector>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);

int main() {
	
	string inputString = ""; getline(cin, inputString);
	string longestS = "";

	vector<string> vectString; splitStringToStringVector(vectString, inputString, ' ');
	int vectStringSize = vectString.size();
	for (int i = 0; i < vectStringSize; ++i) {
		string currentElement = vectString[i];
		int currentElementLen = currentElement.length();

		string currentS = "";
		for (int j = 0; j < currentElementLen; ++j) {
			if (!isdigit(currentElement[j])) {
				currentS += currentElement[j];
			}
		}

		if (i == 0) {
			longestS = currentS;
		}
		else if (currentS.length() > longestS.length()) {
			longestS = currentS;
		}
		else if (currentS.length() == longestS.length()) {
			// check if the currentS is lexicographically lower than the longestS
			if (currentS < longestS) {
				longestS = currentS;
			}
		}

	}

	if (longestS.length() > 0) {
		cout << longestS << endl;
	}
	else {
		cout << "no noise" << endl;
	}

	return 0;
}

int splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			originalVector.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	originalVector.push_back(element);

	return 0;
}