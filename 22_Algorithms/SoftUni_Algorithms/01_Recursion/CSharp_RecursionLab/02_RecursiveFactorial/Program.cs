using System;

namespace _02_RecursiveFactorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            long fact = getFactorial(n);
            Console.WriteLine(fact);
        }

        static long getFactorial(int n)
        {
            if (n == 0)
            {
                return 1;
            }

            return n * getFactorial(n - 1);
        }
    }
}