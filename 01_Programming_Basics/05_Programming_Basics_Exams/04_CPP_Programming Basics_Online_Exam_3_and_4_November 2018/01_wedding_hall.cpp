#include <iostream>
#include <string>
#include <math.h> 
using namespace std;

int main() {
  double length = 0.0;
  double width = 0.0; 
  double side = 0.0;
  cin >> length >> width >> side;

  double hallSize = length * width;
  double barSize = side * side;
  double danceSize = hallSize * 0.19;
  double freeSpace = hallSize - barSize - danceSize;
  
  double guests = ceil(freeSpace / 3.2);
  cout << guests << endl;

  return 0;
}