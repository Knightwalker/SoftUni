#include <string.h>
#include <iostream>
#include <Windows.h>

const int memosize = 100;
int fib(int n) {
    static int memo[memosize];
    static bool init = false;
    if (!init) {
        memo[0] = 0;
        memo[1] = 1;
        for (int c = 2; c < memosize; c++) {
            memo[c] = -1;
        }
        init = true;
    }

    if (n >= memosize) {
        return fib(n - 1) + fib(n - 2);
    }

    if (memo[n] == -1) {
        memo[n] = fib(n - 1) + fib(n - 2);
    }

    return memo[n];
}


int fibslow(int n) {
	if (n == 1) { return 1; }
	if (n == 0) { return 0; }
	return fibslow(n - 1) + fibslow(n - 2);
}


int main() {
	int a;
	std::cin >> a;
	int start = GetTickCount();
	int result = fib(a);
	int end = GetTickCount();
	std::cout << "res: " << result << "\ntime: " << (end - start) << "ms";
	getchar();
	getchar();
	return 0;
}