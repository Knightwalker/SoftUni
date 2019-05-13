#include <iostream>
using namespace std;

int main() {
  string animal, msg;
  cin >> animal;

  if (animal == "dog") {
    msg = "mammal";
  } else if (animal == "crocodile" || animal == "tortoise" || animal == "snake") {
    msg = "reptile";
  } else {
    msg = "unknown";
  }   

  cout << msg << endl;

  return 0;
}