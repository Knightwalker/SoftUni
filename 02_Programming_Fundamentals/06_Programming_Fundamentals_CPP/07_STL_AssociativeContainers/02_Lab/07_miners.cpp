#include <iostream>
#include <string>
#include <map>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::map;
using std::vector;

int main()
{
	map<string, double> minersMap;
	vector<string> orderVect;

	string keyStr = "";
	string valStr = "";
	while (cin >> keyStr && keyStr != "stop") {
		cin >> valStr;
		string key = keyStr;
		double val = stod(valStr);

		if (minersMap.find(key) == minersMap.end()) {
			minersMap[key] = 0.0;
			orderVect.push_back(key);
		}
		minersMap[key] += val;
	}

	for (int i = 0; i < orderVect.size(); i++) {
		string key = orderVect[i];
		cout << key << " -> " << minersMap[key] << endl;
	}

}