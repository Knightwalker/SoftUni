#include <iostream>
#include <string>
#include <stdlib.h>
using namespace std;

int main() {
  int width = 0;
  int length = 0;
  int height = 0;
  cin >> width >> length >> height;
  cin.ignore();

  string command = "";

  int space = width * length * height;

  while(true) {
    getline(cin, command);
    if (command == "Done") { break; }

    int number = stoi(command);
    space -= number;

    if (space <= 0) {
      break;
    }

  }

  if (space <= 0) {
    cout << "No more free space! You need " << abs(space) << " Cubic meters more." << endl;
  } else {
    cout << space << " Cubic meters left.";
  }

}