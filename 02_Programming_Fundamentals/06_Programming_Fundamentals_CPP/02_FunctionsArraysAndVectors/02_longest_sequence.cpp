#include <iostream>
using namespace std;

void longestSequence(int arr[], int len);

int main() {

  int len = 0; cin >> len;
  
  int arr[1000] = {0};
  for (int i = 0; i < len; i++) {
    cin >> arr[i];
  }

  // find longest sequence
  longestSequence(arr, len);

}

void longestSequence(int arr[], int len) {
 
  int bestElement = arr[0];
  int bestSeqLen = 1;
  int currentSeqLen = 1;

  for (int i = 1; i < len; i++) {

    if (arr[i - 1] == arr[i]) {
      currentSeqLen++;
    } else {
      currentSeqLen = 1;
    }

    if (currentSeqLen >= bestSeqLen) {
      bestElement = arr[i];
      bestSeqLen = currentSeqLen;
    }

  }

  for (int i = 0; i < bestSeqLen; i++) {
    cout << bestElement << " ";
  }

}