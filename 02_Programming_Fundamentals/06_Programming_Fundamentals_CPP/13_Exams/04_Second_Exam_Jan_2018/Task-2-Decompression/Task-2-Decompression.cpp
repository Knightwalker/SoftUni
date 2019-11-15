#include <iostream>
#include <string>
#include <cctype>

using std::cin;
using std::cout;
using std::endl;
using std::string;

int main()
{
	string input = ""; getline(cin, input);
	const size_t inputSize = input.size();
	
	string output = "";
	string outputNumber = "";

	for (size_t i = 0; i < inputSize; ++i) {

		if (isdigit(input[i])) {
			outputNumber += input[i];
		}
		else if (isalpha(input[i])) {
			if (outputNumber.empty()) {
				output += input[i];
			}
			else {
				for (int j = 0; j < stoi(outputNumber); j++) {
					output += input[i];
				}
				outputNumber = "";
			}
		
		}

	}

	cout << output << endl;

}