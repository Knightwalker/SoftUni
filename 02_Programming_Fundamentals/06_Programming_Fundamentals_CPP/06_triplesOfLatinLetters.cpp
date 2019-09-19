#include <iostream>
#include <string>
#include <vector>
#include <ctype.h>
#include <cmath>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
  
  int size = 0;
  cin >> size;

  char firstChar = 'a';

  for(int i = 0; i < size; i++) 
  {
    for(int j = 0; j < size; j++) 
    {
      for(int k = 0; k < size; k++) 
      {
        cout << (char)(firstChar + i)
             << (char)(firstChar + j)
             << (char)(firstChar + k)
             << endl;
      }
    }
  }

}
