#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

void splitStringToStringVector(vector<string>& originalVector, string inputString);

int main() {
	string inputString = ""; getline(cin, inputString);
	vector<string> stringVect; splitStringToStringVector(stringVect, inputString);

	//for (int i = 0; i < stringVect.size(); i++) {
	//	cout << stringVect[i] << endl;
	//}

	string matchedWord = ""; cin >> matchedWord;
	double matchPercentWanted = 0; cin >> matchPercentWanted;
	int similarWords = 0;

	for (int i = 0; i < stringVect.size(); i++) {
		string currentWord = stringVect[i];

		double counter = 0;
		if (currentWord.length() == matchedWord.length() && currentWord[0] == matchedWord[0]) {
			for (size_t i = 0; i < currentWord.length(); i++) {
				if (currentWord[i] == matchedWord[i]) {
					counter++;
				}
			}
		}
		
		double matchPercentCurrent = (counter / currentWord.length()) * 100;
		if (matchPercentCurrent >= matchPercentWanted) {
			similarWords++;
		}

	}

	cout << similarWords << endl;

	return 0;
}

void splitStringToStringVector(vector<string>& originalVector, string inputString) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] >= 'a' && inputString[i] <= 'z') {
			element += inputString[i];
		}
		else {
			if (element.length() > 0) { originalVector.push_back(element); }
			element = "";
		}
	}

	if (element.length() > 0) { originalVector.push_back(element); }	
}