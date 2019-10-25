#include <iostream>;
#include <string>;
#include <vector>;
#include <sstream>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;

void readStringVectorFromStringStream(vector<string>& vect);

int main() {
	vector<string> stringVect; readStringVectorFromStringStream(stringVect);
	int n = 0; cin >> n;

	int stringVectSize = stringVect.size();
	for (int i = 0; i < n; i++)
	{
		string temp = stringVect[stringVectSize - 1];
		for (int j = stringVectSize - 1; j >= 1; j--) {
			stringVect[j] = stringVect[j - 1];
		}
		stringVect[0] = temp;
	}

	for (int i = 0; i < stringVectSize; i++)
	{
		cout << stringVect[i] << endl;
	}

	return 0;
}

void readStringVectorFromStringStream(vector<string>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}