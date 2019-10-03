#include <iostream>;
#include <string>;

using std::cin;
using std::cout;
using std::endl;
using std::string;

int main() {
	string input = "";
	getline(cin, input);
	int inputSize = input.size();
	if (input[0] != ' ') { input[0] = toupper(input[0]); }

	for (int i = 1; i < inputSize; ++i) {	
		if (!isalpha(input[i - 1])) {
			input[i] = toupper(input[i]);
		}
	}

	cout << input << endl;
	return 0;
}