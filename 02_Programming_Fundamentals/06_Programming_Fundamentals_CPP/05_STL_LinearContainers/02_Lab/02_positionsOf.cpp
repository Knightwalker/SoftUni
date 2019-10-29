#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

void read2DIntVector(vector<vector<int>>& intVector);

int main()
{
	vector<vector<int>> matrix; read2DIntVector(matrix);

	int number = 0; cin >> number;
	int found = 0;
	string msg = "";

	for (int i = 0; i < matrix.size(); i++)
	{
		for (int j = 0; j < matrix[i].size(); j++)
		{
			if (matrix[i][j] == number) {
				cout << i << " " << j << endl;
				found = 1;
			}
		}
	}

	if (found <= 0) {
		cout << "not found" << endl;
	}

}

void read2DIntVector(vector<vector<int>>& intVector) {
	int n = 0; cin >> n;
	int m = 0; cin >> m;
	intVector.reserve(n);

	for (int i = 0; i < n; i++)
	{
		vector<int> array; array.reserve(m);
		for (int j = 0; j < m; j++)
		{
			int el = 0; cin >> el;
			array.push_back(el);
		}
		intVector.push_back(array);
	}

}