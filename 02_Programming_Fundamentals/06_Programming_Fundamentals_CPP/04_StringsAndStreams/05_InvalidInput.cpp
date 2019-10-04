#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);
bool isNumber(string& str);

int main() {
	string inputString = ""; getline(cin, inputString);
	vector<string> stringVect; splitStringToStringVector(stringVect, inputString, ' ');

	int numbers = 0;
	string output = "";

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i) {
		if (isNumber(stringVect[i])) {
			numbers += stoi(stringVect[i]);
		}
		else {
			output += stringVect[i] + " ";
		}
	}

	cout << numbers << endl;
	cout << output << endl;

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

bool isNumber(string& str) {
	int strLen = str.length();

	for (int i = 0; i < strLen; i++)
		if (isdigit(str[i]) == false) {
			if (str[i] != '-') {
				return false;
			}
			else if (str[i] == '-' && i < strLen - 1) {
				if (isdigit(str[i + 1]) == false) {
					return false;
				}
			}
		}

	return true;

}