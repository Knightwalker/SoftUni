#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

int readIntVector(vector<int>& vect);

int main()
{
    vector<int> intVect; readIntVector(intVect);

    int seqCount = 1;
    int bestSeqCount = 1;
    int bestSeqEndIndex = 0;

    for (int i = 1; i < intVect.size(); i++) {

        int prevEl = intVect[i - 1];
        int currentEl = intVect[i];

        if (prevEl < currentEl) { 
            seqCount++; 
        }
        else { 
            seqCount = 1; 
        }

        if (seqCount >= bestSeqCount) {
            bestSeqCount = seqCount;
            bestSeqEndIndex = i;
        }

    }

    cout << bestSeqCount << endl;
    //cout << bestSeqEndIndex << endl;
    return 0;
}

int readIntVector(vector<int>& vect) {

    int n = 0; cin >> n;
        int el = 0;
        for (int i = 0; i < n; i++)
        {
            cin >> el;
            vect.push_back(el);
        }

        return 0;
}