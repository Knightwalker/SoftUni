#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
 
  int water = 0;
  int counter = 0;
  string input = "";
  cin >> water;

  while (true) {
    cin >> input;

    if (input == "Hard") {
      water -= 200;
    } else if (input == "Medium") {
      water -= 100;
    } else if (input == "Easy") {
      water -= 50;
    }
    counter++;

    if (water <= 0) { break; }

  }

  if (water < 0 ) {
    cout << abs(water) << "ml has been spilled." << endl;
  } else {
    cout << "The dispenser has been tapped " << counter << " times." << endl;
  }

}