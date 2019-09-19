#include <iostream>
#include <string>
#include <vector>
#include <ctype.h>
#include <cmath>
using namespace std;

vector<char> readCharVector();

int main() {
  vector<char> charVect = readCharVector();
  string numberStr = "";

  int charVectSize = charVect.size();
  for (int i = 0; i < charVectSize; i++) {
    if (isdigit(charVect[i])) {
      numberStr += charVect[i];
    }
  }
 
  cout << sqrt(stoi(numberStr));

}

vector<char> readCharVector() {
	vector<char> charVect;
	char symbol = '_';

  while(true)
  {
    cin >> symbol;
    if (symbol == '.')
    {
      break;
    } 
    else {
      charVect.push_back(symbol);
    }
  }

	return charVect;
}