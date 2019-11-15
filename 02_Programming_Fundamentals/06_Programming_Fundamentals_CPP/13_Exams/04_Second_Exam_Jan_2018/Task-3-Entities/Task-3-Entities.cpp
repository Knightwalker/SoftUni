#include <iostream>;
#include <string>;
#include <vector>;
#include <sstream>;
#include <unordered_map>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;
using std::unordered_map;

void readStringVectorFromStringStream(vector<string>& vect, string inputLine);

int main() {

	vector<vector<string>> table;

	// Step 1 - Fill the Table
	while (true) {
		string inputLine = ""; getline(cin, inputLine);
		if (inputLine == "end") { break; }
		
		vector<string> stringVect; readStringVectorFromStringStream(stringVect, inputLine);
		table.push_back(stringVect);
	}

	// Step 2 - Find The MostCommonElement
	unordered_map<string, int> mostCommonValue;

	string searchHeaderName = ""; getline(cin, searchHeaderName);
	int searchRowIndex = 0;
	for (int i = 0; i < table[0].size(); i++) {
		if (table[0][i] == searchHeaderName) {
			searchRowIndex = i;
			break;
		}
	}

	for (int i = 0; i < table.size(); i++) {
		string element = table[i][searchRowIndex];
		mostCommonValue[element]++;
	}

	string elementMaxName = "";
	int elementMaxValue = -1;
	for (auto elements : mostCommonValue) {
		int currentValue = elements.second;
	
		if (currentValue > elementMaxValue) {
			elementMaxName = elements.first;
			elementMaxValue = currentValue;
		}
	}

	cout << elementMaxName << " " << elementMaxValue << endl;

	return 0;
}

void readStringVectorFromStringStream(vector<string>& vect, string inputLine) {
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}