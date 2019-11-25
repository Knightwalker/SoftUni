#include <iostream>

int fact(int n, int accumulator = 1) {
	if (n == 0) {
		return accumulator;
	}

	return fact(n - 1, n * accumulator);
}

int main()
{
	std::cout << fact(5) << std::endl;
}