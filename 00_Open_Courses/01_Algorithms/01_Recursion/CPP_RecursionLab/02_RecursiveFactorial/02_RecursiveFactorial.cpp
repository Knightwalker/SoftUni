#include <iostream>

using std::cin;
using std::cout;
using std::endl;

static long getFactorial(int n);

int main()
{
	int n = 0; cin >> n;
	long fact = getFactorial(n);
	cout << fact << endl;

}

static long getFactorial(int n) {

	if (n == 0) {
		return 1;
	}

	return n * getFactorial(n - 1);

}
