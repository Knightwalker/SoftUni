#include <iostream>
#include <string> 
#include <math.h> 
using namespace std;

int main() {

    string input = "";
    int number = 0;
    int sumPrime = 0;
    int sumNotPrime = 0;

    while(true) {
      getline(cin, input);

      if (input == "stop") { break; }
      else if (input == "STOP") { break; }
      number = stoi(input);

      if(number < 0)
      {
        cout << "Number is negative." << endl;
        continue;
      }    
      else
      {
        if (number == 1) {
          sumNotPrime += number;
        } 
        else if(number > 1)
        {
          bool isPrime = true;
          for(int i = 2; i <= sqrt(number); i++)
          {
            if(number % i == 0)
            {
              isPrime = false;
              break;
            }
          }
          if(isPrime)
          {
            sumPrime += number;
          } else
          {
            sumNotPrime += number;
          }
        }
      }
    }
    cout << "Sum of all prime numbers is: " << sumPrime << endl;
    cout << "Sum of all non prime numbers is: " << sumNotPrime << endl;

    return 0;
}