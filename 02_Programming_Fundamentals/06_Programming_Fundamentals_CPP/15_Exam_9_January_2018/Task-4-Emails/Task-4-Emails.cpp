#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::map;

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);

int main()
{
	cin.sync_with_stdio(false);

	map<int, vector<string>> messages;
	string s = ""; cin >> s;
	int p = 0; cin >> p;
	cin.ignore();

	while (true) {

		string inputString = ""; getline(cin, inputString);
		if (inputString == ".") { break; }

		int countOccurences = 0;
		vector<string> stringVect; splitStringToStringVector(stringVect, inputString, ' ');
		for (int i = 0; i < stringVect.size(); i++) {
			if (stringVect[i] == s) {
				countOccurences++;
			}
		}

		if (countOccurences > 0) {
			messages[countOccurences].push_back(inputString);
		}

	}

	for (auto it = messages.rbegin(); it != messages.rend(); it++) {

		for (auto m : it->second) {
			cout << m << endl;
			p--;
			if (p == 0) { break; }
		}

		if (p == 0) { break; }
	}

}

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter) {
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
}
