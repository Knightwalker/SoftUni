#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
  int n = 0;   
  int salary = 0;
  cin >> n >> salary;
  cin.ignore();

  for (int i = 0; i < n; i++) {
    string website = "";
    getline(cin, website);

    if (website == "Facebook") {
      salary -= 150;
    } else if (website == "Instagram") {
      salary -= 100;
    } else if (website == "Reddit") {
      salary -= 50;
    }

    if (salary <= 0) {
      cout << "You have lost your salary." << endl;
      break;
    }

  }

  if (salary > 0) {
    cout << salary << endl;
  }

  return 0;

}