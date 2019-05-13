#include <iostream>
#include <string> 
using namespace std;

int main() {
    int number1 = 0;
    int number2 = 0;
    cin >> number1 >> number2;

    int currentNum = 0;
    int lastNum = 1;

    int sumEven = 0;
    int sumOdd = 0;

    for(int i = number1; i <= number2; i++) 
    {
      currentNum = i;
      for(int k = 1; k <= 6; k++)
      {
        lastNum = currentNum % 10;

        if(k % 2 == 0)
        {
          sumEven += lastNum;
        } else
        {
          sumOdd += lastNum;
        }

        currentNum = currentNum / 10;
      }
        if(sumEven == sumOdd)
        {
          cout << i << " ";
        }
      sumEven = 0;
      sumOdd = 0;

    }

    return 0;
}