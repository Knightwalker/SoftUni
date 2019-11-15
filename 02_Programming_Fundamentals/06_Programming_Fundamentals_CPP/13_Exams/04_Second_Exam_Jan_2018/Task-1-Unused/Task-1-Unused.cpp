#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int main()
{
	string input = ""; cin >> input;
	vector<int> lettersUsedVect(26, 0);

	for (int i = 0; i < input.size(); i++) {
		lettersUsedVect[(int)input[i] - 97]++;
	}

	for (int i = 0; i < lettersUsedVect.size(); i++) {
		if (lettersUsedVect[i] == 0) {
			cout << (char)(i + 97);
		}
	}

}