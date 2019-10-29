#include <iostream>;
#include <string>;
#include <stack>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::stack;

int main() {

	string input; getline(cin, input);
	int inputLen = input.length();
	stack<char> bracketsStack;
	
	bracketsStack.push(input[0]);
	int bracketsLevel = 3;
	for (int i = 1; i < inputLen; ++i) {
		// determine brackets level based on previous bracket in the stack
		if (!bracketsStack.empty() && bracketsStack.top() == '{') { bracketsLevel = 3; }
		else if (!bracketsStack.empty() && bracketsStack.top() == '[') { bracketsLevel = 2; }
		else if (!bracketsStack.empty() && bracketsStack.top() == '(') { bracketsLevel = 1; }

		char bracket = input[i];

		if (bracketsLevel == 3) {
			if (bracket == '{') { bracketsStack.push('{'); bracketsLevel = 3; }
			else if (bracket == '[') { bracketsStack.push('['); bracketsLevel = 2; }
			else if (bracket == '(') { bracketsStack.push('('); bracketsLevel = 1; }

			else if (bracket == '}') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '{') {
						bracketsStack.pop();
						bracketsLevel = 3;
					}
					else {
						bracketsStack.push('}');
					}
				}
				else {
					bracketsStack.push('}');
				}
			}
			else if (bracket == ']') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '[') {
						bracketsStack.pop();
						bracketsLevel = 3;
					}
					else {
						bracketsStack.push(']');
					}
				}
				else {
					bracketsStack.push(']');
				}
			}
			else if (bracket == ')') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '(') {
						bracketsStack.pop();
						bracketsLevel = 2;
					}
					else {
						bracketsStack.push(')');
					}
				}
				else {
					bracketsStack.push(')');
				}
			}

			// level 2 brackets
		}
		else if (bracketsLevel == 2) {
			if (bracket == '{') { bracketsStack.push('{'); }
			else if (bracket == '[') { bracketsStack.push('['); bracketsLevel = 2; }
			else if (bracket == '(') { bracketsStack.push('('); bracketsLevel = 1; }

			else if (bracket == ']') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '[') {
						bracketsStack.pop();
						bracketsLevel = 3;
					}
					else {
						bracketsStack.push(']');
					}
				}
				else {
					bracketsStack.push(']');
				}
			}
			else if (bracket == ')') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '(') {
						bracketsStack.pop();
						bracketsLevel = 2;
					}
					else {
						bracketsStack.push(')');
					}
				}
				else {
					bracketsStack.push(')');
				}
			}
		}

		// level 1 brackets
		else if (bracketsLevel == 1) {
			if (bracket == '{') { bracketsStack.push('{'); }
			else if (bracket == '[') { bracketsStack.push('['); }
			else if (bracket == '(') { bracketsStack.push('('); bracketsLevel = 1; }

			else if (bracket == ')') {
				if (!bracketsStack.empty()) {
					char lastBracket = bracketsStack.top();
					if (lastBracket == '(') {
						bracketsStack.pop();
						bracketsLevel = 2;
					}
					else {
						bracketsStack.push(')');
					}
				}
				else {
					bracketsStack.push(')');
				}
			}
		}

		// some fixes
		if (bracketsStack.empty()) { 
			bracketsLevel = 3; 
		}

	} // END for-loop

	if (bracketsStack.empty()) {
		cout << "valid" << endl;
	}
	else {
		cout << "invalid" << endl;
	}

	return 0;
}