#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
void printIntVect(vector<int>& vect);
vector<int> vectFindCartesianProduct(vector<int>& inputVect);

int main()
{
	vector<int> inputVect; readIntVector(inputVect);
	vector<int> resultVect = vectFindCartesianProduct(inputVect);
	printIntVect(resultVect);
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

void printIntVect(vector<int>& vect) {
	int vectSize = vect.size();
	for (int i = 0; i < vectSize; i++)
	{
		cout << vect[i] << " ";
	}
}

vector<int> vectFindCartesianProduct(vector<int>& inputVect) {
	vector<int> resultVect;
	resultVect.reserve(inputVect.size() * inputVect.size());

	for (int i = 0; i < inputVect.size(); i++) {
		for (int j = 0; j < inputVect.size(); j++) {
			resultVect.push_back(inputVect[i] * inputVect[j]);
		}
	}

	return resultVect;
}