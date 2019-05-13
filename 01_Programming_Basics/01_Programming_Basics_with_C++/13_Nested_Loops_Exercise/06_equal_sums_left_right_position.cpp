#include <iostream>
#include <string> 
using namespace std;

int main() {

    int number1 = 0;
    int number2 = 0;
    cin >> number1 >> number2;
    
    int firstGroup = 0;
    int secondGroup = 0;
    int thirdGroup = 0;

    int currentNum = 0;

    for(int i = number1; i <= number2; i++) 
    {
      currentNum = i;

      firstGroup += currentNum % 10;
      currentNum = currentNum / 10;
      firstGroup += currentNum % 10;
      currentNum = currentNum / 10;
      
      secondGroup += currentNum % 10;
      currentNum = currentNum / 10;

      thirdGroup += currentNum % 10;
      currentNum = currentNum / 10;
      thirdGroup += currentNum % 10;
      currentNum = currentNum / 10;

      if(firstGroup == thirdGroup)
      {
        cout << i << " ";
      } 
      else
      {
        if(firstGroup < thirdGroup)
        {
          firstGroup += secondGroup;

        } else
        {
          thirdGroup += secondGroup;
        }
        if(firstGroup == thirdGroup)
        {
          cout << i << " ";
        }
      }

    firstGroup = 0;
    secondGroup = 0;
    thirdGroup = 0;
    }

    return 0;
}