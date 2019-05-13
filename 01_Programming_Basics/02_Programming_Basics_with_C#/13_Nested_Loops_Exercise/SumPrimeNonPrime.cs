using System;

namespace SumPrimeNonPrime
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = 0;
            bool isPrime = true;
            int sumPrime = 0;
            int sumNonPrime = 0;

            string command = string.Empty;
            while ((command = Console.ReadLine().ToLower()) != "stop")
            {
                num = int.Parse(command);

                isPrime = true;

                if (num < 0)
                {
                    Console.WriteLine("Number is negative.");
                    continue;
                }
                if (num == 1)
                {
                    isPrime = false;
                }
                else
                {
                    for (int i = num; i >= 2; i--)
                    {
                        if (num % i == 0 && i != num)
                        {
                            isPrime = false;
                            break;
                        }
                    }
                }

                if (isPrime)
                {
                    sumPrime += num;
                }
                else
                {
                    sumNonPrime += num;
                }
            }
            Console.WriteLine($"Sum of all prime numbers is: {sumPrime}");
            Console.WriteLine($"Sum of all non prime numbers is: {sumNonPrime}");
        }
    }
}
