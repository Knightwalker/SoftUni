#include <iostream>
#include <string>
#include <cctype>

using std::cin;
using std::cout;
using std::endl;
using std::string;

int main()
{
	int diffNumber = 0;
	int sameNumber = 0;
	int sumNumber = 0;

	int n = 0; cin >> n;
	string inputOne = ""; cin >> inputOne;
	string inputTwo = ""; cin >> inputTwo;
	string output = "";

	for (int i = 0; i < n; ++i) {
		char elementOne = inputOne[i];
		char elementTwo = inputTwo[i];

		if (isalpha(elementOne) && isalpha(elementTwo)) {

			if (elementOne == elementTwo) {
				output += elementOne;
				sameNumber++;
			}
			else {
				if (toupper(elementOne) == toupper(elementTwo)) {
					output += toupper(elementOne);
					sameNumber++;
				}
				else {
					output += "#";
					diffNumber++;
				}
			}

		} else {
			if (elementOne == elementTwo) {
				output += elementOne;
				sameNumber++;
			}
			else {
				output += "#";
				diffNumber++;
			}
		}

		if (isdigit(elementOne)) {
			sumNumber += (int)(elementOne - 48);
		}
		if (isdigit(elementTwo)) {
			sumNumber += (int)(elementTwo - 48);
		}

	}

	cout << output << endl;
	cout << diffNumber << endl;
	cout << sameNumber << endl;
	cout << sumNumber << endl;

}