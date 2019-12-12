#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <sstream>
using namespace std;

void readStringVectorFromStringStream(vector<string>& vect, string inputLine);

int main()
{

	map<int, vector<string>> resultDict;
	
	int n = 0; cin >> n; cin.ignore();
	for (int i = 0; i < n; i++) {
		string inputLine = ""; getline(cin, inputLine);
		vector<string> stringVect; readStringVectorFromStringStream(stringVect, inputLine);
		int n1 = stoi(stringVect[0]);
		string oper = stringVect[1];
		int n2 = stoi(stringVect[2]);

		int res = 0;
		if (oper == "+") {
			res = n1 + n2;
		} else if (oper == "-") {
			res = n1 - n2;
		} else if (oper == "*") {
			res = n1 * n2;
		} else if (oper == "/") {
			res = n1 / n2;
		} else if (oper == "%") {
			res = n1 % n2;
		}

		//cout << res << endl;
		resultDict[res].push_back(inputLine);

	}

	for (auto iter = resultDict.rbegin(); iter != resultDict.rend(); ++iter) {
		for (auto line : iter->second) {
			cout << line << endl;
		}
	}

}

void readStringVectorFromStringStream(vector<string>& vect, string inputLine) {
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}