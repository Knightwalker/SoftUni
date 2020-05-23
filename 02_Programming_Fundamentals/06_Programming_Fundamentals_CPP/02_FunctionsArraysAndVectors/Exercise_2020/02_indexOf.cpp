#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
int findElementIndex(vector<int>& vect, int searchedEl);

int main()
{
	vector<int> vect; readIntVector(vect);

	int searchedNumber = 0; cin >> searchedNumber;
	int elementIndex = findElementIndex(vect, searchedNumber);
	cout << elementIndex << endl;

	return 0;
}

void readIntVector(vector<int>& vect) {
	int n = 0; cin >> n;
	int el = 0;
	for (int i = 0; i < n; i++) {
		cin >> el;
		vect.push_back(el);
	}
}

int findElementIndex(vector<int>& vect, int searchedEl) {

	for (unsigned int i = 0; i < vect.size(); i++)
	{
		int currentEl = vect[0];
		if (currentEl == searchedEl) {
			return i;
		}
	}
	return -1;
}