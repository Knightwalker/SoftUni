#include <iostream>;
#include <string>;
#include <unordered_set>
#include <unordered_map>
#include <map>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::map;
using std::unordered_map;
using std::unordered_set;

int main() {
	std::cin.sync_with_stdio(false); 
	std::cout.sync_with_stdio(false);

	map<string, int> playersDict;
	unordered_map<string, unordered_set<string>> teamsDict;

	int t = 0; cin >> t;
	for (int i = 0; i < t; i++) {
		string team = ""; cin >> team;
		int teamSize = 0; cin >> teamSize;

		for (int j = 0; j < teamSize; j++) {
			string teamMember = ""; cin >> teamMember;
			teamsDict[team].insert(teamMember);
			playersDict[teamMember] = 0;
		}

	}

	int g = 0; cin >> g;
	for (int i = 0; i < g; i++) {
		string team = ""; cin >> team;
	
		std::unordered_map<string, unordered_set<string>>::iterator foundTeam = teamsDict.find(team);
		if (foundTeam != teamsDict.end()) {
			
			for (auto const& player : foundTeam->second) {
				playersDict[player]++;
			}
		}

	}

	// output
	for (auto const& player : playersDict) {
		cout << player.second << " ";
	}

}