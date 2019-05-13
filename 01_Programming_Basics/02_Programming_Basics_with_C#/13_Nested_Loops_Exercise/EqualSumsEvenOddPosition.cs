using System;
using System.Diagnostics;

namespace EqualSumsEvenOddPosition
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNum = int.Parse(Console.ReadLine());
            int secondNum = int.Parse(Console.ReadLine());

            int evenSum = 0;
            int oddSum = 0;

            int currentNum = 0;

            for (int i = firstNum; i <= secondNum; i++)
            {
                currentNum = i;

                for (int j = 1; j <= 6; j++)
                {
                    int lastNum = currentNum % 10;
                    currentNum = (currentNum - lastNum) / 10;

                    if(j % 2 == 0)
                    {
                        evenSum += lastNum;
                    }
                    else
                    {
                        oddSum += lastNum;
                    }
                }
                if(oddSum == evenSum)
                {
                    Console.Write($"{i} ");
                }
                evenSum = 0;
                oddSum = 0;
            }
        }
    }
}
