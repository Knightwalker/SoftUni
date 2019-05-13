using System;

namespace EqualSumsLeftRightPosition
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNum = int.Parse(Console.ReadLine());
            int secondNum = int.Parse(Console.ReadLine());

            int currentNumber = default(int);

            int leftSum = 0;
            int rightSum = 0;

            for (int i = firstNum; i <= secondNum; i++)
            {
                currentNumber = i;

                int fifthDigit = currentNumber % 10;
                currentNumber = (currentNumber - fifthDigit ) / 10;

                int fourthDigit = currentNumber % 10;
                currentNumber = (currentNumber - fourthDigit) / 10;

                int thirdDigit = currentNumber % 10;
                currentNumber = (currentNumber - thirdDigit) / 10;

                int secondDigit = currentNumber % 10;
                currentNumber = (currentNumber - secondDigit) / 10;

                int firstDigit = currentNumber % 10;
                currentNumber = (currentNumber - firstDigit) / 10;

                leftSum = firstDigit + secondDigit;
                rightSum = fifthDigit + fourthDigit;

                if(leftSum == rightSum)
                {
                    Console.Write(i + " ");
                    continue;
                }
                else
                {
                    if (leftSum > rightSum)
                    {
                        rightSum += thirdDigit;
                    }
                    else if (rightSum > leftSum)
                    {
                        leftSum += thirdDigit;
                    }
                }
                if(leftSum == rightSum)
                {
                    Console.Write(i + " ");
                }

                leftSum = 0;
                rightSum = 0;
            }
        }
    }
}
