#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

static void Gen01(vector<int>& vect, int index);

int main()
{
	int n = 0; cin >> n;
	vector<int> vect(5, 0);
	Gen01(vect, 0);

	return 0;
}

static void Gen01(vector<int>& vect, int index) {

	if (index > vect.size() - 1) {
		for (int i = 0; i < vect.size(); i++) {
			cout << vect[i];
		}
		cout << endl;
		return;
	}

	for (int i = 0; i <= 1; i++) {
		vect[index] = i;
		Gen01(vect, index + 1);
	}

}