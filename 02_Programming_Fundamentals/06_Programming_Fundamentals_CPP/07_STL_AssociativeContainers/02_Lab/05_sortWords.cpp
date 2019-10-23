#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

void readDoubleVectorFromStringStream(vector<double>& vect);

int main()
{
	vector<double> doubleVect; readDoubleVectorFromStringStream(doubleVect);
	sort(doubleVect.begin(), doubleVect.end());

	bool addSeparator = false;
	for (vector<double>::iterator it = doubleVect.begin(); it != doubleVect.end(); it++) {
		if (addSeparator) {
			cout << " <= ";
		}
		addSeparator = true;
		cout << *it;
	}

}

void readDoubleVectorFromStringStream(vector<double>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	double el;
	while (input >> el) {
		vect.push_back(el);
	}
}