#include <iostream>;
#include <sstream>;
#include <string>;
#include <stack>;

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::string;
using std::stack;

void readIntStackFromStringStream(stack<int>& intStack);

int main() {

	stack<int> trackAStack; readIntStackFromStringStream(trackAStack);
	stack<int> trackBStack; readIntStackFromStringStream(trackBStack);
	stack<int> trackResStack;

	while (!trackAStack.empty() && !trackBStack.empty()) { // break when one of the stacks becomes empty
		if (trackAStack.top() < trackBStack.top()) {
			trackResStack.push(trackAStack.top());
			trackAStack.pop();
			cout << "A";
		}
		else {
			trackResStack.push(trackBStack.top());
			trackBStack.pop();
			cout << "B";
		}
	}

	while (!trackAStack.empty()) { // empty the rest of the stack to the result stack, if empty do nothing
		trackResStack.push(trackAStack.top());
		trackAStack.pop();
		cout << "A";
	}

	while (!trackBStack.empty()) { // empty the rest of the stack to the result stack, if empty do nothing
		trackBStack.push(trackAStack.top());
		trackBStack.pop();
		cout << "B";
	}

	cout << endl;
	while (!trackResStack.empty()) {
		cout << trackResStack.top() << " ";
		trackResStack.pop();
	}

	return 0;
}

void readIntStackFromStringStream(stack<int>& intStack) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	int n;
	while (input >> n) {
		intStack.push(n);
	}

}