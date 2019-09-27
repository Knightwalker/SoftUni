#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::vector;

vector<string> splitStringToVector(string inputString, char delimiter);

int main() {
	int n = 0; cin >> n;
	cin.ignore();

	string inputString = ""; getline(cin, inputString);
	vector<string> bussMilataryTimeVect = splitStringToVector(inputString, ' ');
	vector<int> bussMinutesTimeVect(bussMilataryTimeVect.size(), 0);

	string milataryDepartureTime = ""; getline(cin, milataryDepartureTime);
	int minutesDepartureTime = (stoi(milataryDepartureTime.substr(0,2)) * 60) + stoi(milataryDepartureTime.substr(2, 2));

	int bestIndex = -1;
	int bestDiff = INT_MAX;

	// LOGIC
	int stringVectSize = bussMilataryTimeVect.size();
	for (int i = 0; i < stringVectSize; ++i) {
		string currentMilataryArrivalTime = bussMilataryTimeVect[i];
		int currentMinutesArrivalTime = (stoi(currentMilataryArrivalTime.substr(0, 2)) * 60) + stoi(currentMilataryArrivalTime.substr(2, 2));

		int diff = minutesDepartureTime - currentMinutesArrivalTime;
		if (diff >= 0) {
			if (diff < bestDiff) {
				bestDiff = diff;
				bestIndex = i;
			}
		}
	}

	cout << bestIndex + 1 << endl;

	return 0;
}

vector<string> splitStringToVector(string inputString, char delimiter) {
	vector<string> stringVect;

	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			stringVect.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	stringVect.push_back(element);

	return stringVect;
}