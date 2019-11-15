#include <iostream>;
#include <string>;
#include <map>;
#include <iterator>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::map;
using std::array;

int main() {

	int n = 0; cin >> n;
	map<string, double[2]> weatherChannelMap;
	map<string, double[2]>::iterator it = weatherChannelMap.begin();

	while (weatherChannelMap.size() < n) {
		string town = ""; cin >> town;
		double minTemp = 0; cin >> minTemp;
		double maxTemp = 0; cin >> maxTemp;

		it = weatherChannelMap.find(town);
		if (it == weatherChannelMap.end()) {
			weatherChannelMap[town][0] = minTemp;
			weatherChannelMap[town][1] = maxTemp;
		}
		else {
			double currentMinTemp = weatherChannelMap[town][0];
			double currentMaxTemp = weatherChannelMap[town][1];
			if (minTemp < currentMinTemp) {
				weatherChannelMap[town][0] = minTemp;
			}
			if (maxTemp > currentMaxTemp) {
				weatherChannelMap[town][1] = maxTemp;
			}
		}

	}

	it = weatherChannelMap.begin();
	while (it != weatherChannelMap.end())
	{
		std::cout << it->first << " " << it->second[0] << " " << it->second[1] << std::endl;
		it++;
	}
	
	return 0;
}