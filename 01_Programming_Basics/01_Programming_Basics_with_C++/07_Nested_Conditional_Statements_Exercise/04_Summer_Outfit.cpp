#include <iostream>
using namespace std;

int main() {
  double temperature = 0;
  string timeOfTheDay = "";
  string outfit = "";
  string shoes = "";
  
  cin >> temperature;
  cin >> timeOfTheDay;

  if (timeOfTheDay == "Morning") {     
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
    } else if (timeOfTheDay == "Afternoon") {
    if (temperature >= 10 && temperature <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (temperature > 18 && temperature <= 24) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (temperature >= 25) {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    }
  } else if (timeOfTheDay == "Evening") {
    if (temperature >= 10 && temperature <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (temperature > 18 && temperature <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (temperature >= 25) {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  cout << "It's " << temperature << " degrees, get your " << outfit << " and " << shoes << "." << endl;

  return 0;
}