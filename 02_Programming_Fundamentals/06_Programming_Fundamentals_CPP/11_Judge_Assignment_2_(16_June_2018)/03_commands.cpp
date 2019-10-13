#include <iostream>
#include <string>
#include <stack> 

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::stack;

int main() {

	stack<int> machineStack;
	stack<int> machineStackReversed;

	while (true) {
		string input = ""; getline(cin, input);
		if (input == "end") { break; }

		if (input == "sum") {			
			if (machineStack.size() >= 2) {
				int a = machineStack.top(); machineStack.pop();
				int b = machineStack.top(); machineStack.pop();
				machineStack.push(a + b);
			}
		}
		else if (input == "subtract") {
			if (machineStack.size() >= 2) {
				int a = machineStack.top(); machineStack.pop();
				int b = machineStack.top(); machineStack.pop();
				machineStack.push(a - b);
			}
		}
		else if (input == "concat") {
			if (machineStack.size() >= 2) {
				int a = machineStack.top(); machineStack.pop();
				int b = machineStack.top(); machineStack.pop();
				machineStack.push(stoi(std::to_string(b) + std::to_string(a)));			
			}
		}
		else if (input == "discard") {
			if (machineStack.size() >= 1) {
				machineStack.pop();
			}
		}
		else {
			// the input does not explicitly require us to check if this is a number (it should however!)
			int n = stoi(input);
			machineStack.push(n);
		}

	}

	// Printing
	while (!machineStack.empty()) {
		machineStackReversed.push(machineStack.top());
		machineStack.pop();
	}

	while (!machineStackReversed.empty()) {
		std::cout << machineStackReversed.top() << std::endl;
		machineStackReversed.pop();
	}

	return 0;
}