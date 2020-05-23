#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

int readIntWithNoise(string number);

int main()
{
	string inputNumber = ""; cin >> inputNumber;
	int newNumber = readIntWithNoise(inputNumber);

	cout << sqrt(newNumber) << endl;

	return 0;
}

int readIntWithNoise(string sNumber) {
	int newNumber = 0;
	char symbol;

	unsigned int numberSize = sNumber.size();
	for (unsigned int i = 0; i < numberSize; i++) {
		symbol = sNumber[i];
		if (symbol >= '0' && symbol <= '9') {
			newNumber = newNumber * 10; // up number with ^10
			newNumber = newNumber + (symbol - '0'); // add new number
		}
	}

	return newNumber;
}