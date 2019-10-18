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

int main()
{
	vector<string> stringVect; readStringVectorFromStringStream(stringVect);
	map<string, int> numbersMap;

	int stringVectSize = stringVect.size();
	for (size_t i = 0; i < stringVectSize; ++i)
	{
		map<string, int>::iterator foundNumber = numbersMap.find(stringVect[i]);
		if (foundNumber != numbersMap.end()) {
			numbersMap[stringVect[i]]++;
		}
		else {
			numbersMap[stringVect[i]] = 1;
		}
	}

	for (map<string, int>::iterator i = numbersMap.begin(); i != numbersMap.end(); i++) {
		cout << i->first << " -> " << i->second << endl;
	}

}

void readStringVectorFromStringStream(vector<string>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}