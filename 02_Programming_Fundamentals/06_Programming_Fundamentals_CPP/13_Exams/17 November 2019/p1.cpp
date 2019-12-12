#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <sstream>
using namespace std;

int main()
{
	int n = 0; cin >> n;
	cin.ignore();

	vector<string> outputVect;
	map<string, int> wordsMap;

	for (int i = 0; i < n; i++) {
		string inputLine = ""; getline(cin, inputLine);
		istringstream input(inputLine);

		string word = "";
		while (input >> word) {
			if (word == ".") {
				wordsMap.clear();
				outputVect.push_back(word);
				continue;
			}

			wordsMap[word]++;
			auto it = wordsMap.find(word);
			if (it != wordsMap.end()) {
				if (it->second == 1) {
					outputVect.push_back(word);
				}
			}

		}
	}
	

	for (auto word : outputVect) {
		cout << word << " ";
	}

}