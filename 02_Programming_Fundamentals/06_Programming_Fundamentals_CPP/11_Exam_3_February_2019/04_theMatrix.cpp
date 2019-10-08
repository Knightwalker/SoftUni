#include <iostream>;

using std::cin;
using std::cout;
using std::endl;

bool isPrime(int number);

int main() {

	int n = 0; cin >> n;

	int matrix[100][100]{ 0 };
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			int num = 0; cin >> num;
			matrix[i][j] = num;
		}
	}

	int simpleNumberSum = 0;
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			if ((i > j) && (n - 1 - i < j)) {
				int currentN = matrix[i][j];
				
				if (isPrime(currentN) == true) {
					simpleNumberSum += currentN;
				}
				else if (currentN == 1) {
					simpleNumberSum++;
				}

			}
		}
	}

	cout << simpleNumberSum << endl;

	return 0;
}

bool isPrime(int number) {
	if (number == 1) {
		return false;
	}
	for (int i = 2; i <= number / 2; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}