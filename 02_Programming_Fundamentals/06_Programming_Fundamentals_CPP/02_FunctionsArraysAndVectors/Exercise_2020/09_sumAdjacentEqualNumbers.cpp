#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
void printIntVector(vector<int>& vect);

int main()
{
	vector<int> vect; readIntVector(vect);

	vector<int> temp;
	while (1) {
		for (unsigned int i = 0; i < vect.size() - 1; i++) {
			if (vect[i] == vect[i + 1]) {
				temp.push_back(vect[i] * 2);
				i++;
			}
			else {
				temp.push_back(vect[i]);
			}

			if (i == vect.size() - 2) { // if we reach the element before the last element -> it means that the next element is not equal and we need to push it
				temp.push_back(vect[i + 1]);
			}
		}

		if (temp.size() == vect.size()) { break; }
		vect = temp;
		temp.clear();
	}

	printIntVector(vect);

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

void printIntVector(vector<int>& vect) {
	int vectSize = vect.size();
	for (int i = 0; i < vectSize; i++) {
		cout << vect[i] << " ";
	}
	cout << endl;
}