using System;
using System.Numerics;

namespace _04_RecursiveFactorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            BigInteger factorial = Factorial(n);
            Console.WriteLine(factorial);
        }

        public static BigInteger Factorial(int n)
        {
            if (n == 1)
            {
                return 1;
            }

            BigInteger sum = n * Factorial(n - 1);
            return sum;
        }
    }
}