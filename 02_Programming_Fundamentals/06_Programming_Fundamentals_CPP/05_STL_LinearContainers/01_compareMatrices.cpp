#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);
bool checkEqualVectorToVector(vector<vector<string>>& stringVect1, vector<vector<string>>& stringVect2);

int main()
{
	int n1 = 0; cin >> n1; cin.ignore();
	vector<vector<string>> matrixOne;
	for (int i = 0; i < n1; ++i)
	{
		string input = ""; getline(cin, input);
		vector<string> array; splitStringToStringVector(array, input, ' ');
		matrixOne.push_back(array);

	}

	int n2 = 0; cin >> n2; cin.ignore();
	vector<vector<string>> matrixTwo;
	for (int i = 0; i < n1; ++i)
	{
		string input = ""; getline(cin, input);
		vector<string> array; splitStringToStringVector(array, input, ' ');
		matrixTwo.push_back(array);
	}

	if (checkEqualVectorToVector(matrixOne, matrixTwo) == true) {
		cout << "equal" << endl;
	}
	else {
		cout << "not equal" << endl;
	}

}

void splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			originalVector.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	originalVector.push_back(element);
}

bool checkEqualVectorToVector(vector<vector<string>>& stringVect1, vector<vector<string>>& stringVect2) {

	int stringVect1Size = stringVect1.size();
	int stringVect2Size = stringVect2.size();

	// vectors length is not equal
	if (stringVect1Size != stringVect2Size) { return false; }

	// vectors elements are not equal
	for (int i = 0; i < stringVect1Size; ++i)
	{
		int stringSubVect1Size = stringVect1[i].size();
		int stringSubVect2Size = stringVect2[i].size();

		// vectors sub length is not equal
		if (stringSubVect1Size != stringSubVect2Size) { return false; }

		// vectors sub elements are not equal
		for (int j = 0; j < stringSubVect1Size; j++)
		{
			if (stringVect1[i][j] != stringVect2[i][j]) {
				return false;
			}
		}

	}

	return true;
}