#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

void readIntVectorFromStringStream(vector<int>& vect);
bool isSquareNumber(int num);

int main()
{
	vector<int> intVect; readIntVectorFromStringStream(intVect);
	vector<int> squaresVect;

	for (vector<int>::iterator it = intVect.begin(); it != intVect.end(); it++) {
		if (isSquareNumber(*it)) {
			squaresVect.push_back(*it);
		}
	}

	sort(squaresVect.begin(), squaresVect.end(), greater<int>());
	
	for (auto n : squaresVect) {
		std::cout << n << " ";
	}

}

void readIntVectorFromStringStream(vector<int>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	int el;
	while (input >> el) {
		vect.push_back(el);
	}
}

bool isSquareNumber(int num) {
	int sqrt = static_cast<int>(std::sqrt(num));
	return sqrt * sqrt == num;
}