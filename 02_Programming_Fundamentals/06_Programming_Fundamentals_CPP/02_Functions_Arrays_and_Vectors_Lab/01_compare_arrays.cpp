#include <iostream>
#include <algorithm>
using namespace std;

bool deepEqual(int arr1[], int len1, int arr2[], int len2);

int main() {
  
  int arr1[100] = {0};
  int arr2[100] = {0};

  // read array 1
  int len1 = 0; cin >> len1;
  for (int i = 0; i < len1; i++) {
    cin >> arr1[i];
  }

  // read array 2
  int len2 = 0; cin >> len2;
  for (int i = 0; i < len2; i++) {
    cin >> arr2[i];
  }

  // deep equal, compare arrays
  bool areEqual = deepEqual(arr1, len1, arr2, len2);

  if (areEqual == true) {
    cout << "equal" << endl;
  } else {
    cout << "not equal" << endl;
  }

}

bool deepEqual(int arr1[], int len1, int arr2[], int len2) {
 
  if (len1 != len2) { 
    return false;
  } else {
    for (int i = 0; i < min(len1, len2); i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
  }

  return true;

}