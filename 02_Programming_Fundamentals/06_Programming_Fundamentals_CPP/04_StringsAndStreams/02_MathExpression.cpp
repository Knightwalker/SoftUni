#include <iostream>;
#include <string>;

using std::cin;
using std::cout;
using std::endl;
using std::string;

bool checkMathExpression(string expression);

int main() {

	string input = "";
	getline(cin, input);

	if (checkMathExpression(input)) {
		cout << "correct" << endl;
	}
	else {
		cout << "incorrect" << endl;
	}

	return 0;
}

bool checkMathExpression(string expression) {

	int left = 0;
	int right = 0;
	int expressionSize = expression.size();

	for (int i = 0; i < expressionSize; i++)
	{
		if (expression[i] == '(') {
			left++;
		} else if (expression[i] == ')') {
			right++;
		}
	}

	if (left == right) {
		return true;
	}
	else {
		return false;
	}

}