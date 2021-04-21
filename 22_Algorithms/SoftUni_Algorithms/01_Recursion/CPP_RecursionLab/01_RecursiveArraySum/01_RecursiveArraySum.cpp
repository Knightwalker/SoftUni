#include <iostream>
#include <sstream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;

static int Sum(vector<int> & vect, int index);

int main()
{
	string input = ""; getline(cin, input);
	istringstream ss(input);

	vector<int> numbersVect;
	int number = 0;
	while (ss >> number) {
		numbersVect.push_back(number);
	}

	int sum = Sum(numbersVect, 0);
	cout << sum << endl;

}

static int Sum(vector<int> & vect, int index) {

	if (index == vect.size()) {
		return 0;
	}

	return vect[index] + Sum(vect, index + 1);
}