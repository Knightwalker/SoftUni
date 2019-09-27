#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::vector;

vector<int> splitStringToIntVector(string inputString, char delimiter);

int main() {
  int n = 0; cin >> n; cin.ignore();
	string inputString1 = ""; getline(cin, inputString1);
  string inputString2 = ""; getline(cin, inputString2);

	vector<int> checkup = splitStringToIntVector(inputString1, ' ');
  vector<int> installation = splitStringToIntVector(inputString2, ' ');

  // LOGIC
  for (int i = 0; i < n; i++) {
    int damage = installation[i] - checkup[i];
    int years = installation[i] / damage;
    cout << years << " ";
  }

	return 0;
}

vector<int> splitStringToIntVector(string inputString, char delimiter) {
	vector<int> intVect;

	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			intVect.push_back(stoi(element));
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	intVect.push_back(stoi(element));

	return intVect;
}