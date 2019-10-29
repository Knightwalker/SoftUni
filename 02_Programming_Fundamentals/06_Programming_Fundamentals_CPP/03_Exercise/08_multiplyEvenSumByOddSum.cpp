#include <iostream>

int main() {
  int number = 0;
  std::cin >> number;

  int oddSum = 0;
  int evenSum = 0;

  while(number != 0) 
  {
    int digit = number % 10;
    number /= 10;

    if (number & 1) // if the number is odd - bitwise version
    {
      oddSum += digit;

    } else {
      evenSum += digit;
    }
  }

  std::cout << oddSum * evenSum << std::endl;
  return 0;
}