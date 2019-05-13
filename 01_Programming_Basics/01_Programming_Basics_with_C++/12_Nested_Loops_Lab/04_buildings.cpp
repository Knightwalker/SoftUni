#include <iostream>
#include <string>
using namespace std;

int main() {

  int floors = 0;
  int rooms = 0;
  cin >> floors >> rooms;

  string building = "";

    for (int i = 0; i < rooms; i++) {
      building += "L" + to_string(floors) + to_string(i) + " ";
    }

    building += "\n";

    for (int i = floors - 1; i >= 1; i--) {   
      for (int i2 = 0; i2 < rooms; i2++) {
        if (i % 2 == 0) {
          building += "O" + to_string(i) + to_string(i2) + " ";
        } else {
          building += "A" + to_string(i) + to_string(i2) + " ";
        }
      }
      
      building += "\n";
    }

    cout << building << endl;

    return 0;
  }