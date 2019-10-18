#include <iostream>;
#include <string>;
#include <vector>;
#include <sstream>;
#include <set>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;
using std::set;

void readStringVectorFromStringStream(vector<string>& vect);

int main() {
	vector<string> stringVect; readStringVectorFromStringStream(stringVect);
	set<string> shortWordsSet;

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i)
	{
		string currentElement = stringVect[i];

		for (char& c : currentElement) {
			c = std::tolower(c);
		}

		if (shortWordsSet.find(currentElement) == shortWordsSet.end()) {
			shortWordsSet.insert(currentElement);
		}
	}

	int counter1 = 0;
	for (auto it = shortWordsSet.begin(); it != shortWordsSet.end(); ++it) {
		if ((*it).length() < 5) {
			counter1++;
		}
	}

	int counter2 = 0;
	for (auto it = shortWordsSet.begin(); it != shortWordsSet.end(); ++it) {
		if ((*it).length() < 5) {
			cout << *it;
			counter2++;
			if (counter2 < counter1) {
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