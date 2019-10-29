#include <iostream>
using namespace std;

void aboveAverage(int arr[], int len);

int main() {

  int len = 0; cin >> len;
  
  int arr[1000] = {0};
  for (int i = 0; i < len; i++) {
    cin >> arr[i];
  }

  // print all above average numbers
  aboveAverage(arr, len);

}

void aboveAverage(int arr[], int len) {
 
  int averageNumber = 0;
  for (int i = 0; i < len; i++) { averageNumber += arr[i]; }
  averageNumber = averageNumber / len;

  for (int i = 0; i < len; i++) {
    if (arr[i] >= averageNumber) {
      cout << arr[i] << " ";
    }
  }

}