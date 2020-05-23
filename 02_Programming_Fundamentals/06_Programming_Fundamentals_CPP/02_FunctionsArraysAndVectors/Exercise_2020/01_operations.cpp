#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

bool isNumber(string sNumber);

int main()
{
	string inputLeftOperand = "";
	string inputRightOperand = "";
	string myOperator = "";

	while (true) {
		cout << "Please enter two numbers:" << endl;
		cin >> inputLeftOperand >> inputRightOperand; cin.ignore();

		// validate numbers -> else repeat loop
		if (!(isNumber(inputLeftOperand) && isNumber(inputRightOperand))) {
			cout << "You have entered invalid numbers" << endl;
			continue;
		}
		else {
			break;
		}
	}

	double leftOperand = std::stod(inputLeftOperand);
	double rightOperand= std::stod(inputRightOperand);

	while (true) {
		cout << "Please enter operator:" << endl;
		double result = 0;
		cin >> myOperator;

		if (myOperator == "+") {
			result = leftOperand + rightOperand;
		}
		else if (myOperator == "-") {
			result = leftOperand - rightOperand;
		}
		else if (myOperator == "*") {
			result = leftOperand * rightOperand;
		}
		else if (myOperator == "/") {
			result = leftOperand / rightOperand;
		}
		else {
			cout << "try again" << endl;
			continue;
		}

		cout << result << endl;
		break;

	}

	return 0;
}

bool isNumber(string sNumber) {
	char c = '0';
	unsigned int sNumberSize = sNumber.size();

	if (sNumberSize == 0) {
		return false;
	}
	else if (sNumberSize == 1) {
		// can only contain numbers 0-9 -> else it is not a number
		c = sNumber[0];
		if (c < '0' || c > '9') {
			return false;
		}
	}
	else if (sNumberSize > 1) {
		c = sNumber[0];
		// the first character can only contain numbers 0-9 or flag the number as positive or negative -> else it is not a number
		if (c < '0' || c > '9') {
			if (c != '+' && c != '-') {
				return false;
			}
		}

		// the following characters can only contain numbers 0-9 or a single '.' (representing a decimal number) -> else it is not a number
		int dotCount = 0;
		for (unsigned int i = 1; i < sNumber.size(); i++) {
			c = sNumber[i];

			if (c < '0' || c > '9') {
				if (c == '.') {
					dotCount++;
					if (dotCount >= 2) {
						return false;
					}
				}
				else {
					return false;
				}
			}
		}

	}

	return true;
}