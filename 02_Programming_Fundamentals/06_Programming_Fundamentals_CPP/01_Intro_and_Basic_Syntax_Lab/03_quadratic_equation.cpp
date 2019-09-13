#include <iostream>
#include <cmath>
using namespace std;

int main() {
	int a = 0;
	int b = 0;
	int c = 0;
	cin >> a >> b >> c;
 
	double result = quadratic_equation(a, b, c);
	cout << result << endl;
	
	return 0;

}

double quadratic_equation(int a, int b, int c) {
    int Discriminant = (b * b) - (4 * a * c);
	
    // greater than 0 = 2 roots
	if (Discriminant > 0) {
		double x1 = ((b * (-1)) + sqrt(Discriminant)) / (2 * a);
		double x2 = ((b * (-1)) - sqrt(Discriminant)) / (2 * a);
		cout << x1 << " " << x2 << endl;

	// exactly 0 = 1 root
	} else if (Discriminant == 0) {
		double x = (b * (-1)) / (2 * a);
		cout << x << endl;

	// less than 0 = no roots
	} else if (Discriminant < 0) {
		cout << "no roots" << endl;
	}
	
}	