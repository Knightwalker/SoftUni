#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <sstream>
#include <cmath>
using namespace std;

int main()
{
	vector<string> vectStr;
	int n = 0; cin >> n; cin.ignore();
	for (int i = 0; i < n; i++) {
		string inputLine = ""; getline(cin, inputLine);
		vectStr.push_back(inputLine);
	}
	string outputNumber = ""; getline(cin, outputNumber);

	for (int i = 0; i < n; i++) {
		map<int, string> numbersMap;

		string line = vectStr[i];
		int wordLength = floor(line.length() / 10);
		//cout << wordLength << endl;

		string word = "";
		int counter = 0;
		for (int j = 0; j < line.length(); j += wordLength) {
			word = line.substr(j, wordLength);
			numbersMap[counter++] = word;
		}

		for (int j = 0; j < outputNumber.length(); j++) {
			int searchedNumber = (int)outputNumber[j] - 48;
			//cout << searchedNumber << endl;

			auto foundWord = numbersMap.find(searchedNumber);
			if (foundWord == numbersMap.end()) {
				//std::cout << "Not found!" << std::endl;
			}
			else {
				cout << foundWord->second;
				//std::cout << "Found " << foundWord->first << " with value " << foundWord->second << std::endl;
			}
		}

		cout << endl;

	}

}