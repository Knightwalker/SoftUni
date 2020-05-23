#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);
int findAverageSumOfIntVector(vector<int>& vect);

int main()
{
	vector<int> vect;
	readIntVector(vect);

	int averageSum = findAverageSumOfIntVector(vect);
	
	for (int i = 0; i < vect.size(); i++)
	{
		if (vect[i] >= averageSum) {
			cout << vect[i] << " ";
		}
	}

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

int findAverageSumOfIntVector(vector<int>& vect) {
	int sum = 0;
	int length = vect.size();

	for (int i = 0; i < length; i++) {
		sum += vect[i];
	}

	return sum / length;
}