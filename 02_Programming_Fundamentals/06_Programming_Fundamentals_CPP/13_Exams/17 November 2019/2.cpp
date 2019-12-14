#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <cmath>
#include <algorithm>
using namespace std;

void printSumSimple(int matrix[100][100], int rows, int cols, int k, int t, vector<int>& resultVect);

int main()
{
	int rows = 0; cin >> rows;
	int cols = 0; cin >> cols;
	int matrix[100][100] = { 0 };
	vector<int> resultVect;

	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < cols; j++) {
			int num = 0; cin >> num;
			matrix[i][j] = num;
		}
	}

	int k = 0; cin >> k;
	int t = 0; cin >> t;

	printSumSimple(matrix, rows, cols, k, t, resultVect);
	
	std::sort(resultVect.begin(), resultVect.end(), less<int>());

	for (auto el : resultVect) {
		cout << el << " ";
	}

	/* 
		for (int i = 0; i < rows; i++) {
		for (int j = 0; j < cols; j++) {
			cout << matrix[i][j] << " ";
		}
		cout << endl;
	}
	*/

}

void printSumSimple(int matrix[100][100], int rows, int cols, int k, int t, vector<int> &resultVect)
{
	// k must be smaller than or equal to n 
	if (k > cols) return;

	// row number of first cell in current sub-square of size k x k 
	for (int i = 0; i < rows - k + 1; i++)
	{
		// column of first cell in current sub-square of size k x k 
		for (int j = 0; j < cols - k + 1; j++)
		{
			// Calculate and print sum of current sub-square 
			int sum = 0;
			int counter = 0;
			for (int p = i; p < k + i; p++) {
				for (int q = j; q < k + j; q++) {
					sum += matrix[p][q];
					counter++;
				}
			}	
			int result = floor(sum / counter);
			if (sum >= t) {
				//cout << result << endl;
				resultVect.push_back(result);
			}
		}

		// Line separator for sub-squares starting with next row 
		//cout << endl;
	}
}