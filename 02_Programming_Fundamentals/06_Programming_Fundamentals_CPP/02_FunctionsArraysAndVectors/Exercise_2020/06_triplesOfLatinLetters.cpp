#include <iostream>
using namespace std;

int main() {

    int n = 0;
    cin >> n;

    if (n > 26) { 
        cout << "This number is higher than the latin alphabetic" << endl;
        return 0; 
    }

    for (int s1 = 0; s1 < n; s1++) {
        for (int s2 = 0; s2 < n; s2++) {
            for (int s3 = 0; s3 < n; s3++) {
                cout << (char)(s1 + 'a') 
                     << (char)(s2 + 'a') 
                     << (char)(s3 + 'a') 
                     << endl;
       
            }
        }
    }

}