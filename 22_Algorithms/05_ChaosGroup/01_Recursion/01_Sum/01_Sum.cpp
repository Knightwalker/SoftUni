#include <iostream>

int sum(int n) {
	if (n == 0) {
		return 0;
	}

	return n + sum(n - 1);
}

int main()
{
	std::cout << sum(10) << std::endl;
}