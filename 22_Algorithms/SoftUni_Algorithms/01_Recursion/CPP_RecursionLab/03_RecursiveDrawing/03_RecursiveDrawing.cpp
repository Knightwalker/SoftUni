#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

static void DrawShape(int n);

int main()
{
	int n = 0; cin >> n;
	DrawShape(n);

}

static void DrawShape(int n) {

	if (n == 0) {
		return;
	}

	cout << string(n, '*') << endl;
	DrawShape(n - 1);
	cout << string(n, '#') << endl;

}