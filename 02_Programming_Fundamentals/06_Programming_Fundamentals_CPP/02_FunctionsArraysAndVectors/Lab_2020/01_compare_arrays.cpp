#include <iostream>
#include <vector>
using namespace std;

void readIntVector(vector<int>& vect);
bool areVectorsEqual(vector<int>& vect1, vector<int>& vect2);

int main()
{
    vector<int> vect1;
    vect1.reserve(100);
    readIntVector(vect1);

    vector<int> vect2;
    vect2.reserve(100);
    readIntVector(vect2);

    bool bVectorsAreEqual = areVectorsEqual(vect1, vect2);
    if (bVectorsAreEqual) {
        cout << "equal" << endl;
    }
    else {
        cout << "not equal" << endl;
    }
}

void readIntVector(vector<int>& vect) {
    int n = 0; cin >> n;
    int el = 0;
    for (int i = 0; i < n; i++) {
        cin >> el;
        vect.push_back(el);
    }
}

bool areVectorsEqual(vector<int>& vect1, vector<int>& vect2) {

    // check number of elements
    if (vect1.size() != vect2.size()) {
        return false;
    }

    // check elements values
    for (int i = 0; i < vect1.size(); i++) {
        if (vect1[i] != vect2[i]) {
            return false;
        }
    }

    return true;
}