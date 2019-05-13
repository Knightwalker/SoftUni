#include <iostream>
using namespace std;

int main() {
  double age = 0;
  string gender = "";
  string msg = "";

  cin >> age >> gender;

  if (gender == "m") {
    if (age < 16) {
      msg = "Master";
    } else {
      msg = "Mr.";
    }
  } else if (gender =="f") {
    if (age < 16) {
      msg = "Miss";
    } else {
      msg = "Ms.";
    }
  }

  cout << msg << endl;

  return 0;

}