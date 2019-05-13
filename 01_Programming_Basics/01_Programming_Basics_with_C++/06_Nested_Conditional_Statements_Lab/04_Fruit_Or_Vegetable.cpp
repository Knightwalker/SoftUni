#include <iostream>
using namespace std;

int main() {
	string product, msg;
	cin >> product;

	if (product == "banana" || product == "apple" || product == "kiwi" || product == "cherry" || product == "lemon" || product == "grapes") {
	msg = "fruit";
	} else if (product == "tomato" || product == "cucumber" || product == "pepper" || product == "carrot") {
	msg = "vegetable";
	} else {
	msg = "unknown";
	}

	cout << msg << endl;

	return 0;

}

