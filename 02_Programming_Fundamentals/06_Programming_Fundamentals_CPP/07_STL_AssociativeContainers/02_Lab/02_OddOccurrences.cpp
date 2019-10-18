#include <iostream>;
#include <string>;
#include <vector>;
#include <sstream>;
#include <map>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;
using std::map;

void readStringVectorFromStringStream(vector<string>& vect);

int main() {
	vector<string> stringVect; readStringVectorFromStringStream(stringVect);
	vector<string> wordsOrder;
	map<string, int> wordsMap;

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i)
	{
		string currentElement = stringVect[i];

		for (char &c : currentElement) {
			c = std::tolower(c);
		}

		if (wordsMap.find(currentElement) == wordsMap.end()) {
			wordsMap[currentElement] = 0;
			wordsOrder.push_back(currentElement);
		}
		wordsMap[currentElement]++;
	}

	int counter = 0;
	for (auto it = wordsMap.begin(); it != wordsMap.end(); it++) {
		if (it->second % 2 == 1) {
			counter++;
		}
	}
	int counter2 = 0;
	for (int i = 0; i < wordsOrder.size(); i++) {
		string currentElement = wordsOrder[i];

		map<string, int>::iterator it = wordsMap.find(currentElement);
		if (it->second % 2 == 1) {
			std::cout << it->first;
			counter2++;
			if (counter2 < counter) {
				cout << ", ";
			}
		}

	}

	return 0;
}

void readStringVectorFromStringStream(vector<string>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}