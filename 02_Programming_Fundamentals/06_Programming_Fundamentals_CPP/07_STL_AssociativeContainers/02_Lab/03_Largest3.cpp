#include <iostream>;
#include <sstream>;
#include <string>;
#include <vector>;
#include <algorithm>;

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::vector;
using std::string;

void readIntVectorFromStringStream(vector<float>& vect);

int main() {
	vector<float> intVect; readIntVectorFromStringStream(intVect);
	std::sort(intVect.begin(), intVect.end(), std::greater<int>());

	int intVectSize = intVect.size();
	if (intVectSize >= 3) {
		for (int i = 0; i < 3; ++i)
		{
			cout << intVect[i] << " ";
		}
	}
	else {
		for (int i = 0; i < intVectSize; ++i)
		{
			cout << intVect[i] << " ";
		}
	}

	return 0;
}

void readIntVectorFromStringStream(vector<float>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	float n;
	while (input >> n) {
		vect.push_back(n);
	}

}