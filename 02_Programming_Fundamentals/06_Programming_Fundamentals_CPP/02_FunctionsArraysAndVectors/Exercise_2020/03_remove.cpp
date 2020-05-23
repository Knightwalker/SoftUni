#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
void printIntVector(vector<int>& vect);
void filterVectorFromElement(vector<int>& vect, int element);

int main()
{
	vector<int> vect; 
	readIntVector(vect);

	int element = 0; cin >> element;
	filterVectorFromElement(vect, element);

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

void filterVectorFromElement(vector<int>& vect, int element) {

	vector<int> temp;
	for (unsigned int i = 0; i < vect.size(); i++)
	{
		if (vect[i] != element) {
			temp.push_back(vect[i]);
		}
	}
	vect = temp;
}