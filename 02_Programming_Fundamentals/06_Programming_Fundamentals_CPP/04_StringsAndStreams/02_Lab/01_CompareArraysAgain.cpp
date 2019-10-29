#include <iostream>
#include <sstream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::vector;
using std::string;

int readIntVectorV2(vector<int>& vector);
bool checkEqualVectorToVector(vector<int>& intVect1, vector<int>& intVect2);

int main() {
	
	vector<int> intVect1; readIntVectorV2(intVect1);
	vector<int> intVect2; readIntVectorV2(intVect2);

	if (checkEqualVectorToVector(intVect1, intVect2)) {
		cout << "equal" << endl;
	}
	else {
		cout << "not equal" << endl;
	}

	return 0;
}

int readIntVectorV2(vector<int>& vector) {

	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	int n;
	while (input >> n) {
		vector.push_back(n);
	}

	return 0;
}

bool checkEqualVectorToVector(vector<int>& intVect1, vector<int>& intVect2) {

	int intVect1Size = intVect1.size();
	int intVect2Size = intVect2.size();

	// vectors length is not equal
	if (intVect1Size != intVect2Size) { return false; }

	// vectors elements are not equal
	for (int i = 0; i < intVect1Size; ++i)
	{
		if (intVect1[i] != intVect2[i]) {
			return false;
		}
	}

	return true;
}