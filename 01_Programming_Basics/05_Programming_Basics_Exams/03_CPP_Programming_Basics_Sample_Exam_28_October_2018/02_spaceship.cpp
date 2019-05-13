#include <iostream>
#include <math.h>
using namespace std;

int main() {
  double width = 0.0;
  double length = 0.0;
  double height = 0.0;
  double averageHeightAstronauts = 0.0;
  cin >> width >> length >> height >> averageHeightAstronauts;

  double rocketVolume = width * length * height;
  double roomVolume = (averageHeightAstronauts + 0.40) * 4;
  double slot = floor(rocketVolume / roomVolume);

  if (slot >= 3 && slot <= 10) {
    cout << "The spacecraft holds " << slot << " astronauts." << endl;
  } else if (slot < 3) {
    cout << "The spacecraft is too small." << endl;
  } else if (slot > 10) {
    cout << "The spacecraft is too big." << endl;
  }

}